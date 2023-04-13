import { makeAutoObservable } from "mobx";
import { Player } from "../Player/Player";
import { EventListener } from "../events";

export class Cell {
  private readonly emitter = new EventListener();

  public constructor(
    public readonly rowIndex: number,
    public readonly columnIndex: number,
    public markedBy: Player | null = null,
  ) {
    makeAutoObservable(this);
  }

  public clone() {
    return new Cell(this.rowIndex, this.columnIndex, this.markedBy);
  }

  public emit(event: "press_start", player: Player): void;
  public emit(event: "press_end", player: Player): void;
  public emit(event: string, ...args: unknown[]): void {
    return this.emitter.emit(event, this /* Cell */, ...args);
  }

  public on(
    event: "press_start",
    cb: (cell: Cell, player: Player) => void,
  ): void;
  public on(event: "press_end", cb: (cell: Cell, player: Player) => void): void;
  public on(event: string, cb: (...args: any[]) => void): void {
    return this.emitter.on(event, cb);
  }

  public off(
    event: "press_start",
    cb: (cell: Cell, player: Player) => void,
  ): void;
  public off(
    event: "press_end",
    cb: (cell: Cell, player: Player) => void,
  ): void;
  public off(event: string, cb: (...args: any[]) => void): void {
    return this.emitter.off(event, cb);
  }
}
