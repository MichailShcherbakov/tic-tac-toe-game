import { describe, expect, it } from "vitest";
import { Board } from "./Board";
import { Player, PlayerKindEnum, PlayerMarkEnum } from "./Player";
import { COLUMN_NUM, ROW_NUM } from "./constants";

describe("Board", () => {
  const human = new Player(PlayerKindEnum.HUMAN, PlayerMarkEnum.CROSS);
  const ai = new Player(PlayerKindEnum.AI, PlayerMarkEnum.CIRCLE);

  it("getAvailableCells", () => {
    expect(Board.empty().getAvailableCells()).toHaveLength(
      ROW_NUM * COLUMN_NUM,
    );
    expect(
      /**
       * [H][A][H]
       * [A][H][H]
       * [A][ ][ ]
       */
      Board.empty()
        .mark(0, 0, human)
        .mark(0, 1, ai)
        .mark(0, 2, human)
        .mark(1, 0, ai)
        .mark(1, 1, human)
        .mark(1, 2, human)
        .mark(2, 0, ai)
        .getAvailableCells(),
    ).toHaveLength(2);
  });

  it("isEmpty", () => {
    expect(Board.empty().isEmpty()).toBeTruthy();
  });

  it("isFull", () => {
    expect(Board.empty().isFull()).toBeFalsy();
    expect(
      /**
       * [H][A][H]
       * [A][H][H]
       * [A][H][A]
       */
      Board.empty()
        .mark(0, 0, human)
        .mark(0, 1, ai)
        .mark(0, 2, human)
        .mark(1, 0, ai)
        .mark(1, 1, human)
        .mark(1, 2, human)
        .mark(2, 0, ai)
        .mark(2, 1, human)
        .mark(2, 2, ai)
        .isFull(),
    ).toBeTruthy();
  });

  describe("isTerminal", () => {
    it("isEmpty", () => {
      expect(Board.empty().isTerminal()).toBeFalsy();
    });

    it("isFull & draw", () => {
      expect(
        /**
         * [H][A][H]
         * [A][H][H]
         * [A][H][A]
         */
        Board.empty()
          .mark(0, 0, human)
          .mark(0, 1, ai)
          .mark(0, 2, human)
          .mark(1, 0, ai)
          .mark(1, 1, human)
          .mark(1, 2, human)
          .mark(2, 0, ai)
          .mark(2, 1, human)
          .mark(2, 2, ai)
          .isTerminal(),
      ).toEqual({
        winner: "draw",
      });
    });

    it("not isFull", () => {
      expect(
        /**
         * [H][A][H]
         * [A][H][H]
         * [A][H][ ]
         */
        Board.empty()
          .mark(0, 0, human)
          .mark(0, 1, ai)
          .mark(0, 2, human)
          .mark(1, 0, ai)
          .mark(1, 1, human)
          .mark(1, 2, human)
          .mark(2, 0, ai)
          .mark(2, 1, human)
          .isTerminal(),
      ).toBeFalsy();
    });

    describe.each([
      [
        /**
         * [H][H][H]
         * [ ][ ][ ]
         * [ ][ ][ ]
         */
        Board.empty().mark(0, 0, human).mark(0, 1, human).mark(0, 2, human),
        0,
      ],
      [
        /**
         * [ ][ ][ ]
         * [H][H][H]
         * [ ][ ][ ]
         */
        Board.empty().mark(1, 0, human).mark(1, 1, human).mark(1, 2, human),
        1,
      ],
      [
        /**
         * [ ][ ][ ]
         * [ ][ ][ ]
         * [H][H][H]
         */
        Board.empty().mark(2, 0, human).mark(2, 1, human).mark(2, 2, human),
        2,
      ],
    ])("horizontal", (board, rowIndex) => {
      expect(board.isTerminal()).toEqual({
        winner: human,
        direction: "H",
        rowIndex,
      });
    });

    describe.each([
      [
        /**
         * [H][ ][ ]
         * [H][ ][ ]
         * [H][ ][ ]
         */
        Board.empty().mark(0, 0, human).mark(1, 0, human).mark(2, 0, human),
        0,
      ],
      [
        /**
         * [ ][H][ ]
         * [ ][H][ ]
         * [ ][H][ ]
         */
        Board.empty().mark(0, 1, human).mark(1, 1, human).mark(2, 1, human),
        1,
      ],
      [
        /**
         * [ ][ ][H]
         * [ ][ ][H]
         * [ ][ ][H]
         */
        Board.empty().mark(0, 2, human).mark(1, 2, human).mark(2, 2, human),
        2,
      ],
    ])("vertical", (board, columnIndex) => {
      expect(board.isTerminal()).toEqual({
        winner: human,
        direction: "V",
        columnIndex,
      });
    });

    describe.each([
      [
        /**
         * [H][ ][ ]
         * [ ][H][ ]
         * [ ][ ][H]
         */
        Board.empty().mark(0, 0, human).mark(1, 1, human).mark(2, 2, human),
        {
          winner: human,
          direction: "D",
          diagonal: "main",
        },
      ],
      [
        /**
         * [ ][ ][H]
         * [ ][H][ ]
         * [H][ ][ ]
         */
        Board.empty().mark(0, 2, human).mark(1, 1, human).mark(2, 0, human),
        {
          winner: human,
          direction: "D",
          diagonal: "counter",
        },
      ],
      [
        /**
         * [H][ ][ ]
         * [ ][O][ ]
         * [O][H][H]
         */
        Board.empty()
          .mark(0, 0, human)
          .mark(1, 1, ai)
          .mark(2, 0, ai)
          .mark(2, 1, human)
          .mark(2, 2, human),
        undefined,
      ],
    ])("diagonal", (board, diagonal) => {
      expect(board.isTerminal()).toEqual(diagonal);
    });
  });
});
