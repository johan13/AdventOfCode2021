import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(fileParser(Number, ","), x => simulate1(x, 80), R.length);
export const part2 = R.pipe(fileParser(Number, ","), x => simulate2(x, 256));

function simulate1(fish: number[], days: number): number[] {
    return days === 0
        ? fish
        : simulate1(
              fish.flatMap(f => (f === 0 ? [6, 8] : f - 1)),
              days - 1,
          );
}

function simulate2(fish: number[], days: number): number {
    let obj = R.countBy(R.identity, fish);
    for (let day = 0; day < days; day++) {
        obj = {
            0: obj[1] ?? 0,
            1: obj[2] ?? 0,
            2: obj[3] ?? 0,
            3: obj[4] ?? 0,
            4: obj[5] ?? 0,
            5: obj[6] ?? 0,
            6: (obj[7] ?? 0) + (obj[0] ?? 0),
            7: obj[8] ?? 0,
            8: obj[0] ?? 0,
        };
    }
    return R.sum(R.values(obj));
}
