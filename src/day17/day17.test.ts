import assert from "assert";
import { part1, part2 } from "./day17";

describe("Day 17", () => {
    describe("Part 1", () => {
        it("Example should return 45", () => {
            assert.strictEqual(part1("day17/example.txt"), 45);
        });
        it("Input should return 2701", () => {
            assert.strictEqual(part1("day17/input.txt"), 2701);
        });
    });
    describe("Part 2", () => {
        it("Example should return 112", () => {
            assert.strictEqual(part2("day17/example.txt"), 112);
        });
        it("Input should return 1070", () => {
            assert.strictEqual(part2("day17/input.txt"), 1070);
        });
    });
});
