import React from "react";
import { GameStatistics } from "~/modules/GameStatistics";
import { useTicTacToeEngine } from "./useTicTacToeEngine";
import { GameResult } from "~/modules/TicTacToeEngine";

const statistics = new GameStatistics();

export const GameStatisticsContext = React.createContext(statistics);

export interface GameStatisticsProviderProps {
  children?: React.ReactElement;
}

export function GameStatisticsProvider(props: GameStatisticsProviderProps) {
  return <GameStatisticsContext.Provider {...props} value={statistics} />;
}

export function useGameStatistics() {
  const statistics = React.useContext(GameStatisticsContext);

  const { engine } = useTicTacToeEngine();

  React.useEffect(() => {
    function onGameEnd(result: GameResult) {
      switch (result) {
        case GameResult.WON: {
          return statistics.incWinNum();
        }
        case GameResult.TIE: {
          return statistics.incTieNum();
        }
        case GameResult.LOSE: {
          return statistics.incLossNum();
        }
      }
    }

    engine.on("game:end", onGameEnd);

    return () => {
      engine.off("game:end", onGameEnd);
    };
  }, [engine, statistics]);

  return {
    statistics,
  };
}
