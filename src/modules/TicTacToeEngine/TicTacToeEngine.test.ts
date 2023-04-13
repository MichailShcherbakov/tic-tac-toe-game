import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TicTacToeEngine } from "../TicTacToeEngine/TicTacToeEngine";
import { Player, PlayerKindEnum, PlayerMarkEnum } from "./Player/Player";
import { Cell } from "./Cell";

describe("TicTacToeEngine", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runAllTimers();
    vi.restoreAllMocks();
  });

  it("should return the next turn of the 'CROSS' player", () => {
    const engine = new TicTacToeEngine();

    const human = new Player(PlayerKindEnum.HUMAN, PlayerMarkEnum.CIRCLE);
    const anotherHuman = new Player(PlayerKindEnum.HUMAN, PlayerMarkEnum.CROSS);

    engine.addPlayer(human).addPlayer(anotherHuman);

    engine.nextTick();

    vi.runAllTimers();

    expect(engine.nextTurnPlayer).toEqual(anotherHuman);
  });

  it("should not update state if there are not any changes in nextTick", () => {
    const engine = new TicTacToeEngine();

    const human = new Player(PlayerKindEnum.HUMAN, PlayerMarkEnum.CIRCLE);
    const anotherHuman = new Player(PlayerKindEnum.HUMAN, PlayerMarkEnum.CROSS);

    engine.addPlayer(human).addPlayer(anotherHuman);

    engine.nextTick();

    vi.runAllTimers();

    engine.nextTick();

    vi.runAllTimers();

    engine.nextTick();

    vi.runAllTimers();

    expect(engine.nextTurnPlayer).toEqual(anotherHuman);
  });

  it("should emit events 'press_start' and 'press_end' while choosing a cell (AI)", () => {
    const engine = new TicTacToeEngine();

    const human = new Player(PlayerKindEnum.HUMAN, PlayerMarkEnum.CROSS);
    const ai = new Player(PlayerKindEnum.AI, PlayerMarkEnum.CIRCLE);

    engine.addPlayer(human).addPlayer(ai);

    engine.nextTick();

    vi.runAllTimers();

    expect(engine.nextTurnPlayer).toEqual(human);

    const onCellPressStart = vi.fn((_: Cell, __: Player) => {});
    const onCellPressEnd = vi.fn((_: Cell, __: Player) => {});

    engine.on("cell:press_start", onCellPressStart);
    engine.on("cell:press_end", onCellPressEnd);

    engine.move(0, 0, human);

    expect(engine.nextTurnPlayer).toEqual(ai);

    vi.runAllTimers();

    engine.off("cell:press_start", onCellPressStart);
    engine.off("cell:press_end", onCellPressEnd);

    expect(onCellPressStart).toBeCalledTimes(1);
    expect(onCellPressStart.mock.calls[0][1]).toEqual(ai);

    expect(onCellPressEnd).toBeCalledTimes(1);
    expect(onCellPressEnd.mock.calls[0][1]).toEqual(ai);

    expect(engine.nextTurnPlayer).toEqual(human);
  });

  it("should reset state", () => {
    const engine = new TicTacToeEngine();

    const human = new Player(PlayerKindEnum.HUMAN, PlayerMarkEnum.CROSS);
    const ai = new Player(PlayerKindEnum.AI, PlayerMarkEnum.CIRCLE);

    engine.addPlayer(human).addPlayer(ai);

    engine.nextTick();

    vi.runAllTimers();

    engine.move(0, 0, human);

    expect(engine.board.isEmpty).toBeFalsy();
    expect(engine.nextTurnPlayer).toEqual(ai);

    engine.reset();

    expect(engine.board.isEmpty).toBeTruthy();
    expect(engine.nextTurnPlayer).toEqual(human);
  });
});
