import { readFileSync } from "fs";
import { resolve } from "path";

export default function fileParser<T>(parser: (s: string) => T, separator: string | RegExp = "\n") {
    return (filePath: string) =>
        readFileSync(resolve(__dirname, "..", filePath), "utf8")
            .trimRight()
            .split(separator)
            .map(x => parser(x));
}
