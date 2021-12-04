import R from "ramda";
import { fileParser } from "../common";

export const part1 = R.pipe(readInput, playToWin, getAnswer);
export const part2 = R.pipe(readInput, playToLose, getAnswer);

type Board = (number | null)[][];
type Input = { numbers: number[]; boards: Board[] };
function readInput(filePath: string): Input {
    const [numbers, ...boards] = fileParser(x => x, "\n\n")(filePath);
    return {
        numbers: numbers.split(",").map(Number),
        boards: boards.map(b => b.split("\n").map(r => r.trim().split(/\s+/).map(Number))),
    };
}

function playToWin(input: Input): { board: Board; number: number } {
    const [n, ...numbers] = input.numbers;
    const boards = input.boards.map(crossOut(n));
    const winningBoard = boards.find(isWinning);
    return winningBoard ? { board: winningBoard, number: n } : playToWin({ numbers, boards });
}

function playToLose(input: Input): { board: Board; number: number } {
    const [n, ...numbers] = input.numbers;
    const boards = input.boards.map(crossOut(n));
    const remainingBoards = boards.filter(b => !isWinning(b));
    return remainingBoards.length === 0
        ? { board: boards[0], number: n }
        : playToLose({ numbers, boards: remainingBoards });
}

function crossOut(n: number) {
    return (board: Board) => board.map(row => row.map(cell => (cell === n ? null : cell)));
}

function isWinning(board: Board) {
    const hasRow = (board: Board) => board.some(row => row.every(cell => cell === null));
    return hasRow(board) || hasRow(R.transpose(board));
}

function getAnswer({ board, number }: { board: Board; number: number }) {
    return R.sum(board.flat().map(x => x ?? 0)) * number;
}
