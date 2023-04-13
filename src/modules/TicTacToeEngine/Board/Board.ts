import { makeAutoObservable } from "mobx";
import { Cell } from "../Cell/Cell";
import { Player } from "../Player/Player";
import { COLUMN_NUM, ROW_NUM } from "../constants";

export type TerminalBoard =
  | {
      winner: Player;
      direction: "H";
      rowIndex: number;
    }
  | { winner: Player; direction: "V"; columnIndex: number }
  | { winner: Player; direction: "D"; diagonal: "main" | "counter" }
  | { winner: "draw" };

export class Board {
  public constructor(public readonly cells: Cell[]) {
    makeAutoObservable(this);
  }

  public static empty(): Board {
    const cells: Cell[] = [];

    for (let rowIndex = 0; rowIndex < ROW_NUM; ++rowIndex) {
      for (let columnIndex = 0; columnIndex < COLUMN_NUM; ++columnIndex) {
        cells.push(new Cell(rowIndex, columnIndex));
      }
    }

    return new Board(cells);
  }

  public clone(): Board {
    return new Board([...this.cells.map(cell => cell.clone())]);
  }

  public getCell(
    rowIndex: Cell["rowIndex"],
    columnIndex: Cell["columnIndex"],
  ): Cell | undefined {
    return this.cells[columnIndex + rowIndex * ROW_NUM];
  }

  public mark(
    rowIndex: Cell["rowIndex"],
    columnIndex: Cell["columnIndex"],
    player: Player,
  ): this {
    const cell = this.getCell(rowIndex, columnIndex);

    if (!cell || cell?.markedBy) return this;

    cell.markedBy = player;

    return this;
  }

  public get availableCells(): Cell[] {
    return this.cells.filter(cell => !cell.markedBy);
  }

  public get isEmpty() {
    return this.cells.every(cell => !cell.markedBy);
  }

  public get isFull() {
    return this.cells.every(cell => cell.markedBy);
  }

  public get isTerminal(): TerminalBoard | undefined {
    if (this.isEmpty) return;

    for (let rowIndex = 0; rowIndex < ROW_NUM; ++rowIndex) {
      let isFound = true;
      const firstColumn = this.getCell(rowIndex, 0)!;

      if (!firstColumn.markedBy) continue;

      for (let columnIndex = 1; columnIndex < COLUMN_NUM; ++columnIndex) {
        isFound =
          firstColumn.markedBy ===
          this.getCell(rowIndex, columnIndex)!.markedBy;

        if (!isFound) break;
      }

      if (!isFound) continue;

      return {
        winner: firstColumn.markedBy,
        direction: "H",
        rowIndex,
      };
    }

    for (let columnIndex = 0; columnIndex < COLUMN_NUM; ++columnIndex) {
      let isFound = true;
      const firstRow = this.getCell(0, columnIndex)!;

      if (!firstRow.markedBy) continue;

      for (let rowIndex = 1; rowIndex < ROW_NUM; ++rowIndex) {
        isFound =
          firstRow.markedBy === this.getCell(rowIndex, columnIndex)!.markedBy;

        if (!isFound) break;
      }

      if (!isFound) continue;

      return {
        winner: firstRow.markedBy,
        direction: "V",
        columnIndex,
      };
    }

    for (
      let rowIndex = 0,
        columnIndex = 0,
        isFound = true,
        firstCell = this.getCell(0, 0)!;
      rowIndex < ROW_NUM && isFound;
      ++rowIndex, ++columnIndex
    ) {
      if (!firstCell.markedBy) break;

      isFound =
        firstCell.markedBy === this.getCell(rowIndex, columnIndex)!.markedBy;

      if (isFound && rowIndex + 1 === ROW_NUM) {
        return {
          winner: firstCell.markedBy,
          direction: "D",
          diagonal: "main",
        };
      }
    }

    for (
      let rowIndex = 0,
        columnIndex = COLUMN_NUM - 1,
        isFound = true,
        firstCell = this.getCell(0, COLUMN_NUM - 1)!;
      rowIndex < ROW_NUM && isFound;
      ++rowIndex, --columnIndex
    ) {
      if (!firstCell.markedBy) break;

      isFound =
        firstCell.markedBy === this.getCell(rowIndex, columnIndex)!.markedBy;

      if (isFound && rowIndex + 1 === ROW_NUM) {
        return {
          winner: firstCell.markedBy!,
          direction: "D",
          diagonal: "counter",
        };
      }
    }

    if (this.isFull) {
      return { winner: "draw" };
    }

    return undefined;
  }

  public clear() {
    this.cells.forEach(cell => {
      cell.markedBy = null;
    });
  }
}
