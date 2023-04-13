import { makeAutoObservable } from "mobx";
import { Board } from "./Board/Board";
import { Cell } from "./Cell";
import { Player, PlayerKindEnum, PlayerMarkEnum } from "./Player/Player";
import { EventListener } from "./events";

export interface IFirstTurnPlayerSelector {
  find(players: Player[]): Player;
}

export class CrossFirstTurnPlayerSelector implements IFirstTurnPlayerSelector {
  public find(players: Player[]): Player {
    return players.find(p => p.mark === PlayerMarkEnum.CROSS)!;
  }
}

export interface TicTacToeEngineOptions {
  firstTurnPlayerSelector: IFirstTurnPlayerSelector;
}

export enum GameResult {
  WON = "WON",
  TIE = "TIE",
  LOSE = "LOSE",
}

export class TicTacToeEngine {
  private emitter = new EventListener();

  public board: Board = Board.empty();
  public players: Player[] = [];

  public nextTurnPlayer: Player | null = null;

  public firstTurnPlayerSelector: IFirstTurnPlayerSelector;

  public constructor(options: Partial<TicTacToeEngineOptions> = {}) {
    const { firstTurnPlayerSelector = new CrossFirstTurnPlayerSelector() } =
      options;

    makeAutoObservable(this);

    this.firstTurnPlayerSelector = firstTurnPlayerSelector;
  }

  public move(rowIndex: number, columnIndex: number, player: Player): void {
    if (this.board.isTerminal) return;

    this.board.mark(rowIndex, columnIndex, player);

    // this.nextTurnPlayer = this.getNextPlayerAfter(player);

    this.nextTick();
  }

  public nextTick(): void {
    setTimeout(() => {
      if (this.board.isTerminal) {
        return this.emit(
          "game:end",
          this.board.isTerminal.winner === "draw"
            ? GameResult.TIE
            : this.board.isTerminal.winner.kind === PlayerKindEnum.HUMAN
            ? GameResult.WON
            : GameResult.LOSE,
        );
      }

      if (!this.nextTurnPlayer) {
        this.nextTurnPlayer = this.firstTurnPlayerSelector.find(this.players);
      } else {
        this.nextTurnPlayer = this.getNextPlayerAfter(this.nextTurnPlayer);

        if (!this.nextTurnPlayer) {
          throw new Error("Next turn player was not found");
        }
      }

      if (this.nextTurnPlayer.kind !== PlayerKindEnum.AI) {
        return;
      }

      const cell = this.nextTurnPlayer.getBestMove(this.board);

      if (!cell) return;

      cell.emit("press_start", this.nextTurnPlayer!);

      setTimeout(() => {
        cell.emit("press_end", this.nextTurnPlayer!);

        this.move(cell.rowIndex, cell.columnIndex, this.nextTurnPlayer!);
      }, 150);
    });
  }

  public reset(): void {
    this.board.clear();
    this.nextTurnPlayer = this.firstTurnPlayerSelector.find(this.players);
    this.nextTick();
  }

  private getNextPlayerAfter(player: Player): Player | null {
    let foundPlayerIndex = this.players.findIndex(p => p === player);

    if (foundPlayerIndex === -1) return null;

    if (foundPlayerIndex + 1 >= this.players.length) {
      foundPlayerIndex = -1; // -1 + 1 => 0
    }

    return this.players[foundPlayerIndex + 1];
  }

  public addPlayer(player: Player): this {
    this.players.push(player);
    return this;
  }

  private emit(event: "game:end", result: GameResult): void;
  private emit(event: string, ...args: any[]): void {
    this.emitter.emit(event, ...args);
  }

  public on(
    event: "cell:press_start",
    cb: (cell: Cell, player: Player) => void,
  ): void;
  public on(
    event: "cell:press_end",
    cb: (cell: Cell, player: Player) => void,
  ): void;
  public on(event: "game:end", cb: (result: GameResult) => void): void;
  public on(e: string, cb: (...args: any[]) => void): void {
    const [namespace, event] = e.split(":");

    switch (namespace) {
      case "cell": {
        return this.board.cells.forEach(cell => {
          cell.on(event as any, cb);
        });
      }
      case "game": {
        return this.emitter.on(e, cb);
      }
    }
  }

  public off(
    event: "cell:press_start",
    cb: (cell: Cell, player: Player) => void,
  ): void;
  public off(
    event: "cell:press_end",
    cb: (cell: Cell, player: Player) => void,
  ): void;
  public off(event: "game:end", cb: (result: GameResult) => void): void;
  public off(e: string, cb: (...args: any[]) => void): void {
    const [namespace, event] = e.split(":");

    switch (namespace) {
      case "cell": {
        return this.board.cells.forEach(cell => {
          cell.off(event as any, cb);
        });
      }
      case "game": {
        return this.emitter.off(e, cb);
      }
    }
  }
}
