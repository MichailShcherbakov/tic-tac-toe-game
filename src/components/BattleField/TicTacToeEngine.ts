import { Board } from "./TicTacToeEngine/Board";
import {
  Player,
  PlayerKindEnum,
  PlayerMarkEnum,
} from "./TicTacToeEngine/Player";

export class TicTacToeEngine {
  private readonly players: Player[] = [];

  public constructor(public readonly board: Board) {
    this.players = [
      { kind: PlayerKindEnum.HUMAN, mark: PlayerMarkEnum.CROSS },
      { kind: PlayerKindEnum.AI, mark: PlayerMarkEnum.CIRCLE },
    ];
  }
}
