import R from "ramda";
import { fileParser } from "../common";

export function part1(filePath: string) {
    return fileParser(parseLine)(filePath)
        .flatMap(x => x.output)
        .filter(x => [2, 3, 4, 7].includes(x.length)).length;
}

export function part2(filePath: string) {
    return fileParser(parseLine)(filePath).reduce(
        (sum, { patterns, output }) => sum + decode(findMapping(patterns), output),
        0,
    );
}

function parseLine(line: string) {
    const [patterns, output] = line
        .split(" | ")
        .map(x => x.split(" ").map(x => x.split("").sort().join("")));
    return { patterns, output };
}

function findMapping(patterns: string[]) {
    for (const mapping of getPermutations("abcdefg")) {
        if (patterns.every(p => unscramble(mapping, p) in sevenSeg)) {
            return mapping;
        }
    }
    throw new Error("Not found");
}

function* getPermutations(str: string): Generator<string> {
    if (str.length === 0) {
        yield "";
    } else {
        for (let i = 0; i < str.length; i++) {
            const nextChar = str[i];
            const strWithoutNextChar = str.slice(0, i) + str.slice(i + 1);
            for (const perm of getPermutations(strWithoutNextChar)) {
                yield nextChar + perm;
            }
        }
    }
}

function unscramble(mapping: string, scrambled: string) {
    return R.range(0, scrambled.length)
        .map(i => mapping[scrambled.charCodeAt(i) - 97])
        .sort()
        .join("");
}

function decode(mapping: string, output: string[]): number {
    return Number(output.map(o => sevenSeg[unscramble(mapping, o)]).join(""));
}

const sevenSeg: Record<string, number> = {
    abcefg: 0,
    cf: 1,
    acdeg: 2,
    acdfg: 3,
    bcdf: 4,
    abdfg: 5,
    abdefg: 6,
    acf: 7,
    abcdefg: 8,
    abcdfg: 9,
};
