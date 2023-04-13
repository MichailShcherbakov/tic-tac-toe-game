import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { PlayerMarkEnum } from "../TicTacToeEngine/Player";

export class PlayerPreferences {
  public preferredMark = PlayerMarkEnum.CROSS;

  public constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "PlayerPreferences",
      properties: ["preferredMark"],
      storage: window.localStorage,
    });
  }

  public setPreferredMark(mark: PlayerMarkEnum) {
    this.preferredMark = mark;
  }
}
