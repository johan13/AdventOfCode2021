import assert from "assert";
import { part1, part2 } from "./day03";

describe("Day 3", () => {
    describe("Part 1", () => {
        it("Example should return 198", () => {
            assert.strictEqual(part1("day03/example.txt"), 198);
        });
        it("Input should return 2967914", () => {
            assert.strictEqual(part1("day03/input.txt"), 2967914);
        });
    });
    describe("Part 2", () => {
        it("Example should return 230", () => {
            assert.strictEqual(part2("day03/example.txt"), 230);
        });
        it("Input should return 7041258", () => {
            assert.strictEqual(part2("day03/input.txt"), 7041258);
        });
    });
});
