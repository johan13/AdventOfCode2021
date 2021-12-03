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
    rows => ({ o2: findRating(rows, "o2"), co2: findRating(rows, "co2") }),
    ({ o2, co2 }) => parseInt(o2, 2) * parseInt(co2, 2),
);

function findRating(rows: string[], what: "o2" | "co2", pos = 0): string {
    if (rows.length === 1) {
        return rows[0]!;
    }
    const [ones, zeros] = R.partition(x => x[pos] === "1", rows);
    const [more, fewer] = R.sortBy(x => -x.length, [ones, zeros]);
    return findRating(what === "o2" ? more! : fewer!, what, pos + 1);
}
