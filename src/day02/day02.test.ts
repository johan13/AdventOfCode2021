import assert from "assert";
import { part1, part2 } from "./day02";

describe("Day 2", () => {
    describe("Part 1", () => {
        it("Example should return 150", () => {
            assert.strictEqual(part1("day02/example.txt"), 150);
        });
        it("Input should return 1635930", () => {
            assert.strictEqual(part1("day02/input.txt"), 1635930);
        });
    });
    describe("Part 2", () => {
        it("Example should return 900", () => {
            assert.strictEqual(part2("day02/example.txt"), 900);
        });
        it("Input should return 1781819478", () => {
            assert.strictEqual(part2("day02/input.txt"), 1781819478);
        });
    });
});
