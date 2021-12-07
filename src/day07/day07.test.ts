import assert from "assert";
import { part1, part2 } from "./day07";

describe("Day 7", () => {
    describe("Part 1", () => {
        it("Example should return 37", () => {
            assert.strictEqual(part1("day07/example.txt"), 37);
        });
        it("Input should return 336040", () => {
            assert.strictEqual(part1("day07/input.txt"), 336040);
        });
    });
    describe("Part 2", () => {
        it("Example should return 168", () => {
            assert.strictEqual(part2("day07/example.txt"), 168);
        });
        it("Input should return 94813675", () => {
            assert.strictEqual(part2("day07/input.txt"), 94813675);
        });
    });
});
