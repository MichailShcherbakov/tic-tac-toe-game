import { describe, expect } from "vitest";
import { Board } from "./Board";
import { Player, PlayerKindEnum, PlayerMarkEnum } from "./Player";
import { Cell } from "./Cell";

describe("Player", () => {
  const human = new Player(PlayerKindEnum.HUMAN, PlayerMarkEnum.CROSS);
  const ai = new Player(PlayerKindEnum.AI, PlayerMarkEnum.CIRCLE);

  describe.each([
    [
      /**
       * [H][ ][H]
       * [ ][ ][H]
       * [A][ ][A]
       */
      Board.empty()
        .mark(0, 0, human)
        .mark(0, 2, human)
        .mark(1, 2, human)
        .mark(2, 0, ai)
        .mark(2, 2, ai),
      { rowIndex: 2, columnIndex: 1, markedBy: null } as Cell,
    ],
    [
      /**
       * [H][ ][ ]
       * [ ][A][ ]
       * [A][H][H]
       */
      Board.empty()
        .mark(0, 0, human)
        .mark(1, 1, ai)
        .mark(2, 0, ai)
        .mark(2, 1, human)
        .mark(2, 2, human),
      { rowIndex: 0, columnIndex: 2, markedBy: null } as Cell,
    ],
  ])("AI algorithm", (board, cell) => {
    expect(ai.getBestMove(board)).toEqual(cell);
  });
});
