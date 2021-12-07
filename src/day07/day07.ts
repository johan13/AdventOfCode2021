import R from "ramda";
import { fileParser } from "../common";

export function part1(filePath: string) {
    const input = fileParser(Number, ",")(filePath);
    const alignAt = R.median(input);
    return R.sum(input.map(x => Math.abs(x - alignAt)));
}

export function part2(filePath: string) {
    const input = fileParser(Number, ",")(filePath);
    const fuelCost = (a: number, b: number) => {
        const d = Math.abs(a - b);
        return (d * (d + 1)) / 2;
    };
    const totalCost = (a: number) => R.sum(input.map(b => fuelCost(a, b)));
    return Math.min(...R.range(Math.min(...input), Math.max(...input)+1).map(totalCost));
}
