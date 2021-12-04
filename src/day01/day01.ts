import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(
    fileParser(Number),
    R.aperture(2),
    R.filter(([a, b]) => b > a),
    R.length,
);

export const part2 = R.pipe(
    fileParser(Number),
    R.aperture(3),
    R.map(R.sum),
    R.aperture(2),
    R.filter(([a, b]) => b > a),
    R.length,
);
