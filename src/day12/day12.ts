import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(readInput, countPaths);
export const part2 = R.pipe(readInput, connections => countPaths(connections, true));

function readInput(filePath: string) {
    const connections: Record<string, string[]> = {};
    for (const { from, to } of fileParser(parseConnection)(filePath)) {
        if (from !== "end" && to !== "start") {
            (connections[from] ??= []).push(to);
        }
        if (to !== "end" && from !== "start") {
            (connections[to] ??= []).push(from);
        }
    }
    return connections;
}

function parseConnection(line: string) {
    const [, from, to] = /^(.*)-(.*)$/.exec(line)!;
    return { from, to };
}

function countPaths(
    connections: Record<string, string[]>,
    canRevisitOnce = false,
    path = ["start"],
): number {
    const position = path.at(-1)!;
    if (position === "end") {
        return 1;
    }
    return connections[position]
        .filter(dest => canRevisitOnce || isBigCave(dest) || !path.includes(dest))
        .reduce(
            (count, dest) =>
                count +
                countPaths(
                    connections,
                    canRevisitOnce && (isBigCave(dest) || !path.includes(dest)),
                    [...path, dest],
                ),
            0,
        );
}

function isBigCave(cave: string) {
    const c = cave.charCodeAt(0);
    return 65 <= c && c <= 90;
}
