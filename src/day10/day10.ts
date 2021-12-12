import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(
    fileParser(line => line.split("")),
    R.map(getCorruptChar),
    R.map(getScore1),
    R.sum,
);

export const part2 = R.pipe(
    fileParser(line => line.split("")),
    R.map(getClosingChars),
    R.filter((x: string[]) => x.length > 0),
    R.map(getScore2),
    R.median,
);

function getCorruptChar(line: string[]): string {
    const stack: string[] = [];
    for (const char of line) {
        if (isOpening(char)) {
            stack.push(char);
        } else if (char !== getClosing(stack.pop()!)) {
            return char;
        }
    }
    return ""; // Incomplete
}

function isOpening(char: string) {
    return "([{<".includes(char);
}

function getClosing(opening: string) {
    switch (opening) {
        case "(":
            return ")";
        case "[":
            return "]";
        case "{":
            return "}";
        case "<":
            return ">";
    }
    throw new Error("Not found");
}

function getScore1(char: string): number {
    switch (char) {
        case ")":
            return 3;
        case "]":
            return 57;
        case "}":
            return 1197;
        case ">":
            return 25137;
        default:
            return 0;
    }
}

function getClosingChars(line: string[]) {
    const stack: string[] = [];
    for (const char of line) {
        if (isOpening(char)) {
            stack.push(char);
        } else if (char !== getClosing(stack.pop()!)) {
            return []; // Corrupt
        }
    }
    return stack.reverse().map(getClosing);
}

function getScore2(ending: string[]) {
    const scores: Record<string, number> = { ")": 1, "]": 2, "}": 3, ">": 4 };
    const x = ending.reduce((score, char) => score * 5 + scores[char], 0);
    return x;
}
