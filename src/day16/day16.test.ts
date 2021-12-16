import assert from "assert";
import { part1, part2 } from "./day16";

describe("Day 16", () => {
    describe("Part 1", () => {
        it("Example should return 16", () => {
            assert.strictEqual(part1("day16/example01.txt"), 16);
        });
        it("Example should return 12", () => {
            assert.strictEqual(part1("day16/example02.txt"), 12);
        });
        it("Example should return 23", () => {
            assert.strictEqual(part1("day16/example03.txt"), 23);
        });
        it("Example should return 31", () => {
            assert.strictEqual(part1("day16/example04.txt"), 31);
        });
        it("Input should return 938", () => {
            assert.strictEqual(part1("day16/input.txt"), 938);
        });
    });
    describe("Part 2", () => {
        it("Example should return 3", () => {
            assert.strictEqual(part2("day16/example05.txt"), 3);
        });
        it("Example should return 54", () => {
            assert.strictEqual(part2("day16/example06.txt"), 54);
        });
        it("Example should return 7", () => {
            assert.strictEqual(part2("day16/example07.txt"), 7);
        });
        it("Example should return 9", () => {
            assert.strictEqual(part2("day16/example08.txt"), 9);
        });
        it("Example should return 1", () => {
            assert.strictEqual(part2("day16/example09.txt"), 1);
        });
        it("Example should return 0", () => {
            assert.strictEqual(part2("day16/example10.txt"), 0);
        });
        it("Example should return 0", () => {
            assert.strictEqual(part2("day16/example11.txt"), 0);
        });
        it("Example should return 1", () => {
            assert.strictEqual(part2("day16/example12.txt"), 1);
        });
        it("Input should return 1495959086337", () => {
            assert.strictEqual(part2("day16/input.txt"), 1495959086337);
        });
    });
});
