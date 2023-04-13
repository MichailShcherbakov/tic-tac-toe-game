import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

export class GameStatistics {
  public winNum = 0;
  public tieNum = 0;
  public lossNum = 0;

  public constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "GameStatistics",
      properties: ["winNum", "tieNum", "lossNum"],
      storage: window.localStorage,
    });
  }

  public incWinNum() {
    this.winNum += 1;
  }

  public incTieNum() {
    this.tieNum += 1;
  }

  public incLossNum() {
    this.lossNum += 1;
  }

  public clear() {
    this.winNum = 0;
    this.tieNum = 0;
    this.lossNum = 0;
  }
}
