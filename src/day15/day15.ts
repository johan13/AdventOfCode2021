import Denque from "denque";
import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(
    fileParser(row => row.split("").map(Number), "\n"),
    navigate,
);

export const part2 = R.pipe(
    fileParser(row => row.split("").map(Number), "\n"),
    extendMap,
    navigate,
);

type Coord = { x: number; y: number };

function navigate(map: number[][]) {
    const mapCells = map.map(row => row.map(risk => ({ risk, bestFound: Infinity })));
    mapCells[0][0].bestFound = 0;
    const queue = new Denque<Coord>([{ x: 0, y: 0 }]);
    for (let oldPos = queue.shift(); oldPos !== undefined; oldPos = queue.shift()) {
        const oldBestFound = mapCells[oldPos.y][oldPos.x].bestFound;
        for (const neighbor of adjacentCoords(map, oldPos)) {
            const newMapCell = mapCells[neighbor.y][neighbor.x];
            if (oldBestFound + newMapCell.risk < newMapCell.bestFound) {
                newMapCell.bestFound = oldBestFound + newMapCell.risk;
                queue.push(neighbor);
            }
        }
    }
    return mapCells[map.length - 1][map[0].length - 1].bestFound;
}

function adjacentCoords(map: unknown[][], { x, y }: Coord) {
    const adjacent: Coord[] = [];
    if (x < map[0].length - 1) adjacent.push({ x: x + 1, y });
    if (y < map.length - 1) adjacent.push({ x, y: y + 1 });
    if (x > 0) adjacent.push({ x: x - 1, y });
    if (y > 0) adjacent.push({ x, y: y - 1 });
    return adjacent;
}

function extendMap(map: number[][]): number[][] {
    const width = map[0].length;
    const height = map.length;
    const newMap = R.times(() => new Array(width * 5).fill(0), height * 5);
    for (let xm = 0; xm < 5; xm++) {
        for (let ym = 0; ym < 5; ym++) {
            for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                    newMap[ym * height + y][xm * width + x] = ((map[y][x] + xm + ym - 1) % 9) + 1;
                }
            }
        }
    }
    return newMap;
}
