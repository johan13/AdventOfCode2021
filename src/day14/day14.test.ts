import assert from "assert";
import { part1, part2 } from "./day14";

describe("Day 14", () => {
    describe("Part 1", () => {
        it("Example should return 1588", () => {
            assert.strictEqual(part1("day14/example.txt"), 1588);
        });
        it("Input should return 2027", () => {
            assert.strictEqual(part1("day14/input.txt"), 2027);
        });
    });
    describe("Part 2", () => {
        it("Example should return 2188189693529", () => {
            assert.strictEqual(part2("day14/example.txt"), 2188189693529);
        });
        it("Input should return 2265039461737", () => {
            assert.strictEqual(part2("day14/input.txt"), 2265039461737);
        });
    });
});
