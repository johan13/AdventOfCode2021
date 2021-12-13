import assert from "assert";
import { part1, part2 } from "./day13";

describe("Day 13", () => {
    describe("Part 1", () => {
        it("Example should return 17", () => {
            assert.strictEqual(part1("day13/example.txt"), 17);
        });
        it("Input should return 729", () => {
            assert.strictEqual(part1("day13/input.txt"), 729);
        });
    });
    describe("Part 2", () => {
        it("Example should return O", () => {
            const code = "#####\n#   #\n#   #\n#   #\n#####";
            assert.strictEqual(part2("day13/example.txt"), code);
        });
        it("Input should return RGZLBHFP", () => {
            const code =
                "###   ##  #### #    ###  #  # #### ### \n" +
                "#  # #  #    # #    #  # #  # #    #  #\n" +
                "#  # #      #  #    ###  #### ###  #  #\n" +
                "###  # ##  #   #    #  # #  # #    ### \n" +
                "# #  #  # #    #    #  # #  # #    #   \n" +
                "#  #  ### #### #### ###  #  # #    #   ";
            assert.strictEqual(part2("day13/input.txt"), code);
        });
    });
});
