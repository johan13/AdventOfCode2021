import { fileParser } from "../common";

export function part1(filePath: string) {
    let map = fileParser(line => line.split("").map(Number))(filePath);
    let flashes = 0;
    for (let i = 0; i < 100; i++) {
        doOneStep(map);
        flashes += map.reduce(
            (s1, row) => s1 + row.reduce((s2, x) => s2 + (x === 0 ? 1 : 0), 0),
            0,
        );
    }
    return flashes;
}

export function part2(filePath: string) {
    let map = fileParser(line => line.split("").map(Number))(filePath);
    for (let i = 1; ; i++) {
        doOneStep(map);
        if (map.every(row => row.every(x => x === 0))) {
            return i;
        }
    }
}

function doOneStep(map: number[][]) {
    const toIncrement: Array<{ x: number; y: number }> = [];
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            if (++map[y][x] === 10) {
                map[y][x] = 0;
                toIncrement.push(...allNeightbors(x, y));
            }
        }
    }
    while (toIncrement.length > 0) {
        const { x, y } = toIncrement.pop()!;
        if (map[y][x] > 0 && map[y][x] < 9) {
            map[y][x]++;
        } else if (map[y][x] === 9) {
            map[y][x] = 0;
            toIncrement.push(...allNeightbors(x, y));
        }
    }
}

function allNeightbors(x: number, y: number) {
    const list = [];
    if (x > 0 && y > 0) list.push({ x: x - 1, y: y - 1 });
    if (y > 0) list.push({ x, y: y - 1 });
    if (x < 9 && y > 0) list.push({ x: x + 1, y: y - 1 });
    if (x > 0) list.push({ x: x - 1, y });
    if (x < 9) list.push({ x: x + 1, y });
    if (x > 0 && y < 9) list.push({ x: x - 1, y: y + 1 });
    if (y < 9) list.push({ x, y: y + 1 });
    if (x < 9 && y < 9) list.push({ x: x + 1, y: y + 1 });
    return list;
}
