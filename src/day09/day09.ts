import R from "ramda";
import { fileParser } from "../common";

export function part1(filePath: string) {
    const map = fileParser(row => row.split("").map(Number))(filePath);
    const minimaPlusOne = [...allCoordinates(map)]
        .filter(({ x, y }) => isMinimum(map, x, y))
        .map(({ x, y }) => map[y][x] + 1);
    return R.sum(minimaPlusOne);
}

// All points <9 are part of exactly one basin => only one local min in an area surrounded by 9s.
export const part2 = R.pipe(
    fileParser(row => row.split("").map(Number)),
    getBasinSizes,
    productOfTopThree,
);

function* allCoordinates(map: unknown[][]) {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[0].length; x++) {
            yield { x, y };
        }
    }
}

function isMinimum(map: number[][], x0: number, y0: number): boolean {
    return allNeighbors(map, x0, y0).every(({ x, y }) => map[y][x] > map[y0][x0]);
}

function allNeighbors(map: unknown[][], x: number, y: number) {
    const neighbors = [];
    if (y > 0) neighbors.push({ x, y: y - 1 });
    if (x > 0) neighbors.push({ x: x - 1, y });
    if (y < map.length - 1) neighbors.push({ x, y: y + 1 });
    if (x < map[0].length - 1) neighbors.push({ x: x + 1, y });
    return neighbors;
}

function* getBasinSizes(map: number[][]) {
    for (const { x, y } of allCoordinates(map)) {
        if (map[y][x] !== 9) {
            yield measureAndFillBasin(map, x, y);
        }
    }
}

function measureAndFillBasin(map: number[][], x: number, y: number): number {
    map[y][x] = 9;
    return allNeighbors(map, x, y).reduce(
        (size, { x, y }) => size + (map[y][x] === 9 ? 0 : measureAndFillBasin(map, x, y)),
        1,
    );
}

function productOfTopThree(basins: Iterable<number>) {
    const sorted = [...basins].sort((a, b) => b - a);
    return sorted[0] * sorted[1] * sorted[2];
}
