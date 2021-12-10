import assert from "assert";
import { part1, part2 } from "./day08";

describe("Day 8", () => {
    describe("Part 1", () => {
        it("Example should return 26", () => {
            assert.strictEqual(part1("day08/example.txt"), 26);
        });
        it("Input should return 512", () => {
            assert.strictEqual(part1("day08/input.txt"), 512);
        });
    });
    describe("Part 2", () => {
        it("Example should return 61229", () => {
            assert.strictEqual(part2("day08/example.txt"), 61229);
        });
        it("Input should return 1091165", () => {
            assert.strictEqual(part2("day08/input.txt"), 1091165);
        });
    });
});
