import assert from "assert";
import { part1, part2 } from "./day09";

describe("Day 9", () => {
    describe("Part 1", () => {
        it("Example should return 15", () => {
            assert.strictEqual(part1("day09/example.txt"), 15);
        });
        it("Input should return 468", () => {
            assert.strictEqual(part1("day09/input.txt"), 468);
        });
    });
    describe("Part 2", () => {
        it("Example should return 1134", () => {
            assert.strictEqual(part2("day09/example.txt"), 1134);
        });
        it("Input should return 1280496", () => {
            assert.strictEqual(part2("day09/input.txt"), 1280496);
        });
    });
});
