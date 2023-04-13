import { ReactComponent as CrossIcon } from "~/assets/icons/cross.svg";
import { ReactComponent as CircleIcon } from "~/assets/icons/circle.svg";
import { TurnDisplayBase, TurnDisplayBaseProps } from "./TurnDisplayBase";
import { TurnDisplayIconBase } from "./TurnDisplayIconBase";
import { TurnDisplayTitle } from "./TurnDisplayTitle";
import { useTicTacToeEngine } from "~/hooks/useTicTacToeEngine";
import { PlayerMarkEnum } from "~/modules/TicTacToeEngine/Player";
import { observer } from "mobx-react-lite";
import { ReactElement } from "react";

const MARKS: Record<PlayerMarkEnum, ReactElement> = {
  [PlayerMarkEnum.CROSS]: <CrossIcon />,
  [PlayerMarkEnum.CIRCLE]: <CircleIcon />,
};

export interface TurnDisplayProps extends TurnDisplayBaseProps {}

export const TurnDisplay = observer((props: TurnDisplayProps) => {
  const { engine } = useTicTacToeEngine();

  return (
    <TurnDisplayBase {...props}>
      {engine.nextTurnPlayer && (
        <>
          <TurnDisplayIconBase>
            {MARKS[engine.nextTurnPlayer.mark]}
          </TurnDisplayIconBase>
          <TurnDisplayTitle>Turn</TurnDisplayTitle>
        </>
      )}
    </TurnDisplayBase>
  );
});
