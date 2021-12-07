import R from "ramda";
import { fileParser } from "../common";

export function part1(filePath: string) {
    const input = fileParser(Number, ",")(filePath);
    const alignAt = R.median(input);
    return R.sum(input.map(x => Math.abs(x - alignAt)));
}

export function part2(filePath: string) {
    const input = fileParser(Number, ",")(filePath).sort(R.subtract);
    const map = new Map(R.groupWith(R.equals, input).map(x => [x[0], x.length]));
    const crabsPerPos = R.range(input[0], input[input.length - 1] + 1).map(x => map.get(x) ?? 0);
    const fuelMovingRight = getFuelMovingRight(crabsPerPos);
    const fuelMovingLeft = R.reverse(getFuelMovingRight(R.reverse(crabsPerPos)));
    return Math.min(...R.zipWith((a, b) => a + b, fuelMovingRight, fuelMovingLeft));
}

function getFuelMovingRight(crabsPerPos: number[]) {
    return R.scan(
        (prev, numAtPos) => {
            const numToLeft = prev.numToLeft + prev.numAtPos;
            const fuelFromPrev = prev.fuelFromPrev + numToLeft;
            const accumFuel = prev.accumFuel + fuelFromPrev;
            return { numAtPos, numToLeft, fuelFromPrev, accumFuel };
        },
        { numAtPos: crabsPerPos[0], numToLeft: 0, fuelFromPrev: 0, accumFuel: 0 },
        crabsPerPos.slice(1),
    ).map(x => x.accumFuel);
}
