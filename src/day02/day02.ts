import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(
    fileParser(parseLine),
    R.reduce(part1reducer, { x: 0, y: 0 }),
    ({ x, y }) => x * y,
);

export const part2 = R.pipe(
    fileParser(parseLine),
    R.reduce(part2reducer, { x: 0, y: 0, aim: 0 }),
    ({ x, y }) => x * y,
);

type Move = ReturnType<typeof parseLine>;
function parseLine(line: string) {
    const [, dir, units] = /^(forward|down|up) (\d+)$/.exec(line)!;
    return { dir: dir as "forward" | "down" | "up", units: Number(units) };
}

function part1reducer(pos: { x: number; y: number }, move: Move) {
    switch (move.dir) {
        case "forward":
            return { ...pos, x: pos.x + move.units };
        case "down":
            return { ...pos, y: pos.y + move.units };
        case "up":
            return { ...pos, y: pos.y - move.units };
    }
}

function part2reducer(pos: { x: number; y: number; aim: number }, move: Move) {
    switch (move.dir) {
        case "forward":
            return { ...pos, x: pos.x + move.units, y: pos.y + pos.aim * move.units };
        case "down":
            return { ...pos, aim: pos.aim + move.units };
        case "up":
            return { ...pos, aim: pos.aim - move.units };
    }
}
