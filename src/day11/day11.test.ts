import assert from "assert";
import { part1, part2 } from "./day11";

describe("Day 11", () => {
    describe("Part 1", () => {
        it("Example should return 1656", () => {
            assert.strictEqual(part1("day11/example.txt"), 1656);
        });
        it("Input should return 1659", () => {
            assert.strictEqual(part1("day11/input.txt"), 1659);
        });
    });
    describe("Part 2", () => {
        it("Example should return 195", () => {
            assert.strictEqual(part2("day11/example.txt"), 195);
        });
        it("Input should return 227", () => {
            assert.strictEqual(part2("day11/input.txt"), 227);
        });
    });
});
