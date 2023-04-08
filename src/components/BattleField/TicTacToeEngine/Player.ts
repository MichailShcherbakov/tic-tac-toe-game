import { Board } from "./Board";
import { Cell } from "./Cell";

export enum PlayerKindEnum {
  HUMAN = "HUMAN",
  AI = "AI",
}

export enum PlayerMarkEnum {
  CROSS = "CROSS",
  CIRCLE = "CIRCLE",
}

export class Player {
  public constructor(
    public readonly kind: PlayerKindEnum,
    public readonly mark: PlayerMarkEnum,
    private readonly maxDepth = -1,
    private readonly nodesMap = new Map<number, Cell[]>(),
  ) {}

  public getBestMove(board: Board): Cell;
  public getBestMove(
    board: Board,
    maximizing?: boolean,
    depth?: number,
  ): number;
  public getBestMove(board: Board, maximizing = true, depth = 0) {
    if (depth == 0) this.nodesMap.clear();

    const terminalBoard = board.isTerminal();

    if (terminalBoard || depth === this.maxDepth) {
      if (!terminalBoard?.winner) return 0;

      if (terminalBoard.winner === this) {
        return 100 - depth;
      }

      return -100 + depth;
    }

    if (maximizing) {
      let best = -100;

      board.getAvailableCells().forEach(cell => {
        const child = board.clone();

        child.mark(cell.rowIndex, cell.columnIndex, this);

        const nodeValue = this.getBestMove(child, false, depth + 1);

        best = Math.max(best, nodeValue);

        if (depth == 0) {
          const cells = this.nodesMap.get(nodeValue);

          if (!cells) {
            this.nodesMap.set(nodeValue, [cell]);
          } else {
            cells.push(cell);
          }
        }
      });

      const cells = this.nodesMap.get(best);

      if (depth == 0 && cells) {
        let returnValue;

        if (cells.length) {
          const rand = Math.floor(Math.random() * cells.length);
          returnValue = cells[rand];
        } else {
          returnValue = cells[0];
        }

        return returnValue;
      }

      return best;
    }

    if (!maximizing) {
      let best = 100;

      board.getAvailableCells().forEach(cell => {
        const child = board.clone();

        child.mark(cell.rowIndex, cell.columnIndex, this);

        const nodeValue = this.getBestMove(child, true, depth + 1);

        best = Math.min(best, nodeValue);

        if (depth == 0) {
          const cells = this.nodesMap.get(nodeValue);

          if (!cells) {
            this.nodesMap.set(nodeValue, [cell]);
          } else {
            cells.push(cell);
          }
        }
      });

      const cells = this.nodesMap.get(best);

      if (depth == 0 && cells) {
        let returnValue;

        if (cells.length) {
          const rand = Math.floor(Math.random() * cells.length);
          returnValue = cells[rand];
        } else {
          returnValue = cells[0];
        }

        return returnValue;
      }

      return best;
    }

    throw new Error("Not correct work minimax algorithm");
  }
}
