import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(fileParser(parseLine), R.filter(is90deg), buildMap, countIntersections);
export const part2 = R.pipe(fileParser(parseLine), buildMap, countIntersections);

type Line = ReturnType<typeof parseLine>;
function parseLine(line: string) {
    const [, x1, y1, x2, y2] = /^(\d+),(\d+) -> (\d+),(\d+)$/.exec(line)!.map(Number);
    return { x1, y1, x2, y2 };
}

function is90deg(l: Line) {
    return l.x1 === l.x2 || l.y1 === l.y2;
}

type Map = ReturnType<typeof buildMap>;
function buildMap(lines: Line[]) {
    const width = lines.reduce((max, l) => Math.max(max, l.x1, l.x2), 0) + 1;
    const height = lines.reduce((max, l) => Math.max(max, l.y1, l.y2), 0) + 1;
    const map = R.times(() => R.times(() => 0, width), height);
    lines.forEach(drawLine(map));
    return map;
}

function drawLine(map: Map) {
    return (l: Line) => {
        const dx = Math.sign(l.x2 - l.x1);
        const dy = Math.sign(l.y2 - l.y1);
        for (let x = l.x1, y = l.y1; x !== l.x2 || y !== l.y2; x += dx, y += dy) {
            map[y][x]++;
        }
        map[l.y2][l.x2]++;
    };
}

function countIntersections(map: Map) {
    return map.reduce((s1, row) => s1 + row.reduce((s2, cell) => s2 + (cell > 1 ? 1 : 0), 0), 0);
}
