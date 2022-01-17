import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(fileParser(parseScanner, "\n\n"), input => input.length);

function parseScanner(scanner: string) {
    return scanner
        .split("\n")
        .slice(1)
        .map(str => {
            const [, x, y, z] = /^(-?\d+),(-?\d+),(-?\d+)$/.exec(str)!.map(Number);
            return { x, y, z };
        });
}
