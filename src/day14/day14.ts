import R from "ramda";
import { fileParser } from "../common";

export const part1 = (filePath: string) => polymerize(filePath, 10);
export const part2 = (filePath: string) => polymerize(filePath, 40);

function polymerize(filePath: string, iterations: number) {
    const { template, rules } = readInput(filePath);
    const rulesLookup = Object.fromEntries(rules.map(({ pair, insert }) => [pair, insert]));
    // pairs is a dictionary that maps from two consecutive elements to the number of times that
    // pair of elements appears. Every element appears twice - once as the first element of a pair
    // and once as the second. Pad the ends with spaces to make the first/last element appear twice.
    let pairs = Object.fromEntries(
        Object.values(
            R.groupBy(
                R.identity,
                R.aperture(2, ` ${template} `.split("")).map(x => x.join("")),
            ),
        ).map(x => [x[0], x.length]),
    );

    for (let i = 0; i < iterations; i++) {
        pairs = applyInsertions(pairs, rulesLookup);
    }
    return getDifference(pairs);
}

function readInput(filePath: string) {
    const [template, rules] = fileParser(x => x, "\n\n")(filePath);
    return {
        template,
        rules: rules.split("\n").map(s => {
            const [, pair, insert] = /^(..) -> (.)$/.exec(s)!;
            return { pair, insert };
        }),
    };
}

function applyInsertions(pairs: Record<string, number>, rules: Record<string, string>) {
    const newPairs: Record<string, number> = {};
    for (const [pair, count] of Object.entries(pairs)) {
        const insert = rules[pair];
        if (insert) {
            const pair1 = pair[0] + insert;
            const pair2 = insert + pair[1];
            newPairs[pair1] = (newPairs[pair1] ?? 0) + count;
            newPairs[pair2] = (newPairs[pair2] ?? 0) + count;
        } else {
            newPairs[pair] = (newPairs[pair] ?? 0) + count;
        }
    }
    return newPairs;
}

function getDifference(pairs: Record<string, number>): number {
    const grouped: Record<string, number> = {};
    for (const [pair, count] of Object.entries(pairs)) {
        grouped[pair[0]] = (grouped[pair[0]] ?? 0) + count;
        grouped[pair[1]] = (grouped[pair[1]] ?? 0) + count;
    }
    delete grouped[" "];
    const sorted = Object.values(grouped).sort((a, b) => a - b);
    return sorted[sorted.length - 1] / 2 - sorted[0] / 2;
}
