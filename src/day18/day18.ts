import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(fileParser(tokenize), sum, getMagnitude);
export const part2 = R.pipe(fileParser(tokenize), pairwiseSums, R.map(getMagnitude), m =>
    Math.max(...m),
);

type Token = number | "[" | "," | "]";
function tokenize(str: string) {
    const tokens: Token[] = [];
    while (str) {
        if (str[0] === "[" || str[0] === "," || str[0] === "]") {
            tokens.push(str[0]);
            str = str.slice(1);
        } else {
            const token = /^\d*/.exec(str)![0];
            tokens.push(Number(token));
            str = str.slice(token.length);
        }
    }
    return tokens;
}

function sum(terms: Token[][]) {
    return terms.reduce(add);
}

function add(left: Token[], right: Token[]) {
    return reduce(["[", ...left, ",", ...right, "]"]);
}

function reduce(tokens: Token[]) {
    while (true) {
        const oldTokens = tokens;
        tokens = explode(tokens);
        if (tokens === oldTokens) {
            tokens = split(tokens);
            if (tokens === oldTokens) return tokens;
        }
    }
}

function explode(tokens: Token[]): Token[] {
    let depth = 0;
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (token === "]") {
            depth--;
        } else if (token === "[" && ++depth === 5) {
            tokens = [...tokens];
            const [, left, , right] = tokens.splice(i, 5, 0);
            for (let j = i - 1; j >= 0; j--) {
                if (typeof tokens[j] === "number") {
                    (tokens[j] as number) += left as number;
                    break;
                }
            }
            for (let j = i + 1; j < tokens.length; j++) {
                if (typeof tokens[j] === "number") {
                    (tokens[j] as number) += right as number;
                    break;
                }
            }
            break;
        }
    }
    return tokens;
}

function split(tokens: Token[]): Token[] {
    const i = tokens.findIndex(t => typeof t === "number" && t >= 10);
    if (i !== -1) {
        tokens = [...tokens];
        const n = tokens[i] as number;
        tokens.splice(i, 1, "[", Math.floor(n / 2), ",", Math.ceil(n / 2), "]");
    }
    return tokens;
}

function getMagnitude(tokens: Token[]): number {
    while (tokens.length > 1) {
        for (let i = 0; i < tokens.length - 4; i++) {
            if (tokens[i] === "[" && tokens[i + 2] === "," && tokens[i + 4] === "]") {
                tokens.splice(i, 5, 3 * (tokens[i + 1] as number) + 2 * (tokens[i + 3] as number));
                i--;
            }
        }
    }
    return tokens[0] as number;
}

function pairwiseSums(numbers: Token[][]): Token[][] {
    const sums: Token[][] = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                sums.push(add(numbers[i], numbers[j]));
            }
        }
    }
    return sums;
}
