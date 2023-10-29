const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

type Digit = (typeof DIGITS)[number];
type Possibles = Set<Digit>;
type Cell = Digit | Possibles;
type Line = Array<Cell>;
type Board = Array<Line>;
type Puzzle = Array<Array<0 | Digit>>;

const SUDOKU = {
  Expert: [
    [0, 0, 0, 5, 0, 0, 4, 7, 0],
    [0, 5, 0, 9, 7, 4, 2, 0, 3],
    [0, 0, 0, 0, 0, 0, 5, 0, 9],
    [3, 0, 0, 0, 8, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 3, 0, 7],
    [2, 0, 0, 6, 9, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 9, 3, 0],
    [4, 0, 0, 3, 0, 9, 0, 5, 0],
    [0, 3, 0, 2, 0, 0, 6, 8, 1],
  ] as Puzzle,
};

function sudokuSolver(puzzle: Puzzle = SUDOKU.Expert) {
  const board = puzzle.map((r) =>
    r.map((d) => (d === 0 ? new Set(DIGITS) : d)),
  ) as Board;

  // console.log("board: ", board);

  print("board", board);

  print("columns", asColumns(board));

  print("squares", asSquares(board));
}

function asColumns(board: Board) {
  return Array.from({ length: board.length }).map((_, i) =>
    board.map((row) => row[i]),
  );
}

function asSquares(board: Board) {
  return board;
}

function print(name: string, board: Board) {
  console.log(name);
  for (const row of board) {
    let text = "";
    for (const cell of row) {
      text += cell instanceof Set ? "." : cell;
    }
    console.log(text);
  }
}

console.log(sudokuSolver());

export { sudokuSolver };
