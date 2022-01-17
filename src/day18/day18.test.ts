import assert from "assert";
import { part1, part2 } from "./day18";

describe("Day 18", () => {
    describe("Part 1", () => {
        it("Example should return 4140", () => {
            assert.strictEqual(part1("day18/example.txt"), 4140);
        });
        it("Input should return 4243", () => {
            assert.strictEqual(part1("day18/input.txt"), 4243);
        });
    });
    describe("Part 2", () => {
        it("Example should return 3993", () => {
            assert.strictEqual(part2("day18/example.txt"), 3993);
        });
        it("Input should return 4701", () => {
            assert.strictEqual(part2("day18/input.txt"), 4701);
        });
    });
});
