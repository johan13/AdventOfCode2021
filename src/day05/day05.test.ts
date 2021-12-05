import assert from "assert";
import { part1, part2 } from "./day05";

describe("Day 05", () => {
    describe("Part 1", () => {
        it("Example should return 5", () => {
            assert.strictEqual(part1("day05/example.txt"), 5);
        });
        it("Input should return 6007", () => {
            assert.strictEqual(part1("day05/input.txt"), 6007);
        });
    });
    describe("Part 2", () => {
        it("Example should return 12", () => {
            assert.strictEqual(part2("day05/example.txt"), 12);
        });
        it("Input should return 19349", () => {
            assert.strictEqual(part2("day05/input.txt"), 19349);
        });
    });
});
