import { Cell } from "../Cell";
import { observer } from "mobx-react-lite";
import { Cell as CellType } from "~/modules/TicTacToeEngine/Cell";
import { BattleFieldBase, BattleFieldBaseProps } from "./BattleFieldBase";
import { useTicTacToeEngine } from "~/hooks/useTicTacToeEngine";

export interface BattleFieldProps extends BattleFieldBaseProps {}

export const BattleField = observer((props: BattleFieldProps) => {
  const { engine } = useTicTacToeEngine();

  function cellClickHandler(_: React.MouseEvent<HTMLElement>, cell?: CellType) {
    if (!cell) return;

    engine.move(cell.rowIndex, cell.columnIndex, engine.players[0]);
  }

  return (
    <BattleFieldBase {...props}>
      {engine.board.cells.map(cell => (
        <Cell
          key={`${cell.rowIndex}-${cell.columnIndex}`}
          cell={cell}
          onClick={cellClickHandler}
        />
      ))}
    </BattleFieldBase>
  );
});
