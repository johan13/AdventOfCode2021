import { readFileSync } from "fs";
import { resolve } from "path";

export default function fileParser<T>(
    parser: (s: string, i: number) => T,
    separator: string | RegExp = "\n",
) {
    return (filePath: string) =>
        readFileSync(resolve(__dirname, "..", filePath), "utf8")
            .trimRight()
            .split(separator)
            .map(parser);
}
