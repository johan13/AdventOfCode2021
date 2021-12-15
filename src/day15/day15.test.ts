import assert from "assert";
import { part1, part2 } from "./day15";

describe("Day 15", () => {
    describe("Part 1", () => {
        it("Example should return 40", () => {
            assert.strictEqual(part1("day15/example.txt"), 40);
        });
        it("Input should return 537", () => {
            assert.strictEqual(part1("day15/input.txt"), 537);
        });
    });
    describe("Part 2", () => {
        it("Example should return 315", () => {
            assert.strictEqual(part2("day15/example.txt"), 315);
        });
        it("Input should return 2881", () => {
            assert.strictEqual(part2("day15/input.txt"), 2881);
        });
    });
});
