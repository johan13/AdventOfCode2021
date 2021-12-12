import assert from "assert";
import { part1, part2 } from "./day12";

describe("Day 12", () => {
    describe("Part 1", () => {
        it("Example 1 should return 10", () => {
            assert.strictEqual(part1("day12/example1.txt"), 10);
        });
        it("Example 2 should return 19", () => {
            assert.strictEqual(part1("day12/example2.txt"), 19);
        });
        it("Example 3 should return 226", () => {
            assert.strictEqual(part1("day12/example3.txt"), 226);
        });
        it("Input should return 3485", () => {
            assert.strictEqual(part1("day12/input.txt"), 3485);
        });
    });
    describe("Part 2", () => {
        it("Example 1 should return 36", () => {
            assert.strictEqual(part2("day12/example1.txt"), 36);
        });
        it("Example 2 should return 103", () => {
            assert.strictEqual(part2("day12/example2.txt"), 103);
        });
        it("Example 3 should return 3509", () => {
            assert.strictEqual(part2("day12/example3.txt"), 3509);
        });
        it("Input should return 85062", () => {
            assert.strictEqual(part2("day12/input.txt"), 85062);
        });
    });
});
