import assert from "assert";
import { part1, part2 } from "./day06";

describe("Day 6", () => {
    describe("Part 1", () => {
        it("Example should return 5934", () => {
            assert.strictEqual(part1("day06/example.txt"), 5934);
        });
        it("Input should return 371379", () => {
            assert.strictEqual(part1("day06/input.txt"), 371379);
        });
    });
    describe("Part 2", () => {
        it("Example should return 26984457539", () => {
            assert.strictEqual(part2("day06/example.txt"), 26984457539);
        });
        it("Input should return 1674303997472", () => {
            assert.strictEqual(part2("day06/input.txt"), 1674303997472);
        });
    });
});
