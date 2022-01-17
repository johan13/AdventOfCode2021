import assert from "assert";
import { part1 } from "./day19";

describe.only("Day 19", () => {
    describe("Part 1", () => {
        it("Example should return 79", () => {
            assert.strictEqual(part1("day19/example.txt"), 79);
        });
        it("Input should return ?", () => {
            assert.strictEqual(part1("day19/input.txt"), null);
        });
    });
    // describe("Part 2", () => {
    //     it("Example should return ?", () => {
    //         assert.strictEqual(part2("day19/example.txt"), null);
    //     });
    //     it("Input should return ?", () => {
    //         assert.strictEqual(part2("day19/input.txt"), null);
    //     });
    // });
});
