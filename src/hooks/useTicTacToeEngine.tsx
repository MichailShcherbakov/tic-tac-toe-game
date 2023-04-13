import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { TicTacToeEngine } from "~/modules/TicTacToeEngine";

const initialEngine = new TicTacToeEngine();

const TicTacToeEngineContext = React.createContext(initialEngine);

export interface TicTacToeEngineProviderProps {
  engine: TicTacToeEngine;
  children?: React.ReactElement;
}

export const TicTacToeEngineProvider = observer(
  ({ engine, ...props }: TicTacToeEngineProviderProps) => {
    React.useEffect(() => {
      engine.nextTick();
    }, [engine]);

    return <TicTacToeEngineContext.Provider {...props} value={engine} />;
  },
);

export function useTicTacToeEngine() {
  const engine = useContext(TicTacToeEngineContext);

  return {
    engine,
  };
}
