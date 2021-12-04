import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(
    fileParser(x => x.split("").map(Number)),
    R.transpose,
    R.map(R.median),
    medians => ({ γ: medians.join(""), ε: medians.map(x => 1 - x).join("") }),
    ({ γ, ε }) => parseInt(γ, 2) * parseInt(ε, 2),
);

export const part2 = R.pipe(
    fileParser(x => x),
    rows => [findRating("O₂", rows), findRating("CO₂", rows)],
    ([o2, co2]) => parseInt(o2, 2) * parseInt(co2, 2),
);

function findRating(what: "O₂" | "CO₂", rows: string[], pos = 0): string {
    if (rows.length === 1) {
        return rows[0];
    }
    const [zeros, ones] = R.partition(x => x[pos] === "0", rows);
    const [fewer, more] = R.sortBy(x => x.length, [zeros, ones]);
    return findRating(what, what === "O₂" ? more : fewer, pos + 1);
}
