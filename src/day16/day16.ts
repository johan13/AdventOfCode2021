import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(readInput, createReader, parsePacket, sumVersions);
export const part2 = R.pipe(readInput, createReader, parsePacket, evaluate);

function readInput(filePath: string) {
    return fileParser(
        hex => ("000" + parseInt(hex, 16).toString(2)).slice(-4),
        "",
    )(filePath).join("");
}

type Reader = ReturnType<typeof createReader>;
function createReader(bitStream: string) {
    const getBits = (numBits: number) => {
        const bits = bitStream.slice(0, numBits);
        bitStream = bitStream.slice(numBits);
        return bits;
    };
    return {
        getInt: (numBits: number) => parseInt(getBits(numBits), 2),
        getReader: (numBits: number) => createReader(getBits(numBits)),
        isEOF: () => bitStream.length === 0,
    };
}

type Packet =
    | { version: number; typeId: 4; literal: number }
    | { version: number; typeId: 0 | 1 | 2 | 3 | 5 | 6 | 7; subPackets: Packet[] };

function parsePacket(reader: Reader): Packet {
    const version = reader.getInt(3);
    const typeId = reader.getInt(3) as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    if (typeId === 4) {
        let literal = 0;
        while (true) {
            const x = reader.getInt(5);
            literal = literal * 16 + (x & 0xf); // Note: Bitwise ops are limited to 32 bits.
            if ((x & 0x10) === 0) return { version, typeId, literal };
        }
    } else {
        const subPackets = reader.getInt(1)
            ? R.times(() => parsePacket(reader), reader.getInt(11))
            : parsePackets(reader.getReader(reader.getInt(15)));
        return { version, typeId, subPackets };
    }
}

function parsePackets(reader: Reader) {
    const packets: Packet[] = [];
    while (!reader.isEOF()) packets.push(parsePacket(reader));
    return packets;
}

function sumVersions(packet: Packet): number {
    return packet.version + (packet.typeId === 4 ? 0 : R.sum(packet.subPackets.map(sumVersions)));
}

function evaluate(packet: Packet): number {
    switch (packet.typeId) {
        case 0:
            return R.sum(packet.subPackets.map(evaluate));
        case 1:
            return R.product(packet.subPackets.map(evaluate));
        case 2:
            return Math.min(...packet.subPackets.map(evaluate));
        case 3:
            return Math.max(...packet.subPackets.map(evaluate));
        case 4:
            return packet.literal;
        case 5:
            return evaluate(packet.subPackets[0]) > evaluate(packet.subPackets[1]) ? 1 : 0;
        case 6:
            return evaluate(packet.subPackets[0]) < evaluate(packet.subPackets[1]) ? 1 : 0;
        case 7:
            return evaluate(packet.subPackets[0]) === evaluate(packet.subPackets[1]) ? 1 : 0;
    }
}
