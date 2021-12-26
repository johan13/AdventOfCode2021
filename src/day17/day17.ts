import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(readInput, findMaxY);
export const part2 = R.pipe(readInput, countVelocities);

type Input = ReturnType<typeof readInput>;
function readInput(filePath: string) {
    const lines = fileParser(x => x)(filePath);
    const re = /^target area: x=(\d+)\.\.(\d+), y=(-\d+)\.\.(-\d+)$/;
    const [, xmin, xmax, ymin, ymax] = re.exec(lines[0])!.map(Number);
    return { xmin, xmax, ymin, ymax };
}

function findMaxY({ ymin }: Input) {
    return (ymin * (ymin + 1)) / 2; // Solved analytically.
}

function countVelocities(input: Input) {
    return getVelocities(input).filter(hitsTarget(input)).length;
}

function getVelocities({ xmax, ymin }: Input) {
    const [v0xmin, v0xmax, v0ymin, v0ymax] = [0, xmax, ymin, -ymin - 1]; // Solved analytically.
    return R.range(v0xmin, v0xmax + 1).flatMap(v0x =>
        R.range(v0ymin, v0ymax + 1).map(v0y => ({ v0x, v0y })),
    );
}

function hitsTarget({ xmin, xmax, ymin, ymax }: Input) {
    return ({ v0x: vx, v0y: vy }: { v0x: number; v0y: number }) => {
        let { x, y } = { x: 0, y: 0 };
        while (x <= xmax && y >= ymin) {
            x += vx;
            y += vy;
            vx = Math.max(vx - 1, 0);
            vy--;
            if (xmin <= x && x <= xmax && ymin <= y && y <= ymax) return true;
        }
        return false;
    };
}
