import assert from "assert";
import { part1, part2 } from "./day10";

describe("Day 10", () => {
    describe("Part 1", () => {
        it("Example should return 26397", () => {
            assert.strictEqual(part1("day10/example.txt"), 26397);
        });
        it("Input should return 318081", () => {
            assert.strictEqual(part1("day10/input.txt"), 318081);
        });
    });
    describe("Part 2", () => {
        it("Example should return 288957", () => {
            assert.strictEqual(part2("day10/example.txt"), 288957);
        });
        it("Input should return 4361305341", () => {
            assert.strictEqual(part2("day10/input.txt"), 4361305341);
        });
    });
});
