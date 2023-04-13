import { describe, expect } from "vitest";
import { Board } from "../Board/Board";
import { Player, PlayerKindEnum, PlayerMarkEnum } from "../Player/Player";
import { Cell } from "../Cell/Cell";

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
      new Cell(2, 1),
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
      new Cell(0, 2),
    ],
  ])("AI algorithm", (board, cell) => {
    expect(ai.getBestMove(board)).toEqual(cell);
  });
});
