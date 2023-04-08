import { Player } from "./Player";

export type Cell = {
  columnIndex: number;
  rowIndex: number;
  markedBy: Player | null;
};
