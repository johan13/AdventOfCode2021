import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(readInput, x => makeFold(x.folds[0], x.dots), countDots);
export const part2 = R.pipe(readInput, makeAllFolds, dotsToString);

type Dot = { x: number; y: number };
type Fold = { axis: "x" | "y"; pos: number };
function readInput(filePath: string) {
    const [dots, folds] = fileParser(x => x.split("\n"), "\n\n")(filePath);
    return {
        dots: dots.map(str => {
            const [, x, y] = /^(\d+),(\d+)$/.exec(str)!;
            return { x: Number(x), y: Number(y) };
        }),
        folds: folds.map(str => {
            const [, axis, pos] = /^fold along ([xy])=(\d+)$/.exec(str)!;
            return { axis: axis as "x" | "y", pos: Number(pos) };
        }),
    };
}

function makeFold({ axis, pos }: Fold, dots: Dot[]) {
    return axis === "x"
        ? dots.map(({ x, y }) => ({ x: x < pos ? x : 2 * pos - x, y }))
        : dots.map(({ x, y }) => ({ x, y: y < pos ? y : 2 * pos - y }));
}

function countDots(dots: Dot[]) {
    return new Set(dots.map(({ x, y }) => `${x},${y}`)).size;
}

function makeAllFolds({ dots, folds }: { dots: Dot[]; folds: Fold[] }) {
    return folds.reduce((dots, fold) => makeFold(fold, dots), dots);
}

function dotsToString(dots: Dot[]) {
    const width = Math.max(...dots.map(d => d.x)) + 1;
    const height = Math.max(...dots.map(d => d.y)) + 1;
    const grid = R.times(() => R.times(() => " ", width), height);
    for (const { x, y } of dots) {
        grid[y][x] = "#";
    }
    return grid.map(row => row.join("")).join("\n");
}
