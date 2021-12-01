import assert from "assert";
import { part1, part2 } from "./day01";

describe("Day 1", () => {
    describe("Part 1", () => {
        it("Example should return 7", () => {
            assert.strictEqual(part1("day01/example.txt"), 7);
        });
        it("Input should return 1583", () => {
            assert.strictEqual(part1("day01/input.txt"), 1583);
        });
    });
    describe("Part 2", () => {
        it("Example should return 5", () => {
            assert.strictEqual(part2("day01/example.txt"), 5);
        });
        it("Input should return 1627", () => {
            assert.strictEqual(part2("day01/input.txt"), 1627);
        });
    });
});
