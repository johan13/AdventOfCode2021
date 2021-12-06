import assert from "assert";
import { part1, part2 } from "./day04";

describe("Day 4", () => {
    describe("Part 1", () => {
        it("Example should return 4512", () => {
            assert.strictEqual(part1("day04/example.txt"), 4512);
        });
        it("Input should return 27027", () => {
            assert.strictEqual(part1("day04/input.txt"), 27027);
        });
    });
    describe("Part 2", () => {
        it("Example should return 1924", () => {
            assert.strictEqual(part2("day04/example.txt"), 1924);
        });
        it("Input should return 36975", () => {
            assert.strictEqual(part2("day04/input.txt"), 36975);
        });
    });
});
