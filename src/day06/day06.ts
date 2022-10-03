import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(fileParser(Number, ","), x => simulate(x, 80));
export const part2 = R.pipe(fileParser(Number, ","), x => simulate(x, 256));

function simulate(fish: number[], days: number) {
    const counts = R.range(0, 9).map(x => fish.filter(y => x === y).length);
    for (let i = 0; i < days; i++) {
        const numSpawning = counts.shift()!;
        counts.push(numSpawning);
        counts[6] += numSpawning;
    }
    return R.sum(counts);
}
