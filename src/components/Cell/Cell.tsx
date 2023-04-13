import styled from "@emotion/styled";
import { UiPaperProps } from "~/ui-kit/Paper";
import { ReactComponent as CrossIcon } from "~/assets/icons/cross.svg";
import { ReactComponent as CircleIcon } from "~/assets/icons/circle.svg";
import { UiButton } from "~/ui-kit/Button";
import { PlayerMarkEnum } from "~/modules/TicTacToeEngine/Player/Player";
import { Cell as CellType } from "~/modules/TicTacToeEngine/Cell";
import { observer } from "mobx-react-lite";
import React from "react";
import { ROW_NUM } from "~/modules/TicTacToeEngine/constants";
import { useTicTacToeEngine } from "~/hooks/useTicTacToeEngine";

export interface CellBaseProps extends UiPaperProps {}

export const CellBase = styled(UiButton)(() => ({
  width: "112px",
  height: "112px",
  flexShrink: 0,

  cursor: "pointer",

  "& > *": {
    width: "48px",
    height: "48px",
  },
}));

export interface CellProps extends CellBaseProps {
  cell: CellType;
  onClick?: (e: React.MouseEvent<HTMLElement>, cell?: CellType) => void;
}

export const Cell = observer(({ cell, onClick, ...props }: CellProps) => {
  const [isActive, setIsActive] = React.useState(false);

  const { engine } = useTicTacToeEngine();

  function clickHandler(e: React.MouseEvent<HTMLElement>) {
    onClick?.(e, cell);
  }

  const variant = React.useMemo(() => {
    if (!engine.board.isTerminal || engine.board.isTerminal.winner === "draw") {
      return "outlined";
    }

    if (
      engine.board.isTerminal.direction === "H" &&
      engine.board.isTerminal.rowIndex === cell.rowIndex
    ) {
      return "contained";
    }

    if (
      engine.board.isTerminal.direction === "V" &&
      engine.board.isTerminal.columnIndex === cell.columnIndex
    ) {
      return "contained";
    }

    if (
      engine.board.isTerminal.direction === "D" &&
      engine.board.isTerminal.diagonal === "main" &&
      cell.rowIndex === cell.columnIndex
    ) {
      return "contained";
    }

    if (
      engine.board.isTerminal.direction === "D" &&
      engine.board.isTerminal.diagonal === "counter" &&
      cell.rowIndex + cell.columnIndex === ROW_NUM - 1
    ) {
      return "contained";
    }

    return "outlined";
  }, [cell.columnIndex, cell.rowIndex, engine.board.isTerminal]);

  React.useEffect(() => {
    function onCellPressStart() {
      setIsActive(true);
    }

    function onCellPressEnd() {
      setIsActive(false);
    }

    cell.on("press_start", onCellPressStart);
    cell.on("press_end", onCellPressEnd);

    return () => {
      cell.off("press_start", onCellPressStart);
      cell.off("press_end", onCellPressEnd);
    };
  }, [cell]);

  return (
    <CellBase
      {...props}
      isActive={isActive}
      isInteractive={!cell.markedBy}
      variant={variant}
      color={
        cell.markedBy?.mark === PlayerMarkEnum.CROSS ? "secondary" : "primary"
      }
      onClick={clickHandler}
    >
      {cell.markedBy?.mark === PlayerMarkEnum.CROSS && <CrossIcon />}
      {cell.markedBy?.mark === PlayerMarkEnum.CIRCLE && <CircleIcon />}
    </CellBase>
  );
});
