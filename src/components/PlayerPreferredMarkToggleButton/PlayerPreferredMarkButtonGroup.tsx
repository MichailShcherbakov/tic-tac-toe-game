import {
  PlayerPreferredMarkToggleButtonGroupBase,
  PlayerPreferredMarkToggleButtonGroupBaseProps,
} from "./PlayerPreferredMarkToggleButtonGroupBase";
import { PlayerToggleButton } from "./PlayerPreferredMarkToggleButton";
import { ReactComponent as CrossIcon } from "~/assets/icons/cross.svg";
import { ReactComponent as CircleIcon } from "~/assets/icons/circle.svg";
import { PlayerMarkEnum } from "~/modules/TicTacToeEngine/Player";
import { observer } from "mobx-react-lite";
import { PlayerPreferences } from "~/modules/PlayerPreferences/PlayerPreferences";

const playerPreferences = new PlayerPreferences();

export interface PlayerPreferredMarkToggleButtonGroupProps
  extends PlayerPreferredMarkToggleButtonGroupBaseProps {}

export const PlayerPreferredMarkToggleButtonGroup = observer(
  (props: PlayerPreferredMarkToggleButtonGroupProps) => {
    function changePlayerHandler(mark: PlayerMarkEnum) {
      playerPreferences.setPreferredMark(mark);
    }

    return (
      <PlayerPreferredMarkToggleButtonGroupBase {...props}>
        <PlayerToggleButton
          variant={
            playerPreferences.preferredMark === PlayerMarkEnum.CROSS
              ? "contained"
              : "text"
          }
          onClick={() => changePlayerHandler(PlayerMarkEnum.CROSS)}
        >
          <CrossIcon />
        </PlayerToggleButton>
        <PlayerToggleButton
          variant={
            playerPreferences.preferredMark === PlayerMarkEnum.CIRCLE
              ? "contained"
              : "text"
          }
          onClick={() => changePlayerHandler(PlayerMarkEnum.CIRCLE)}
        >
          <CircleIcon />
        </PlayerToggleButton>
      </PlayerPreferredMarkToggleButtonGroupBase>
    );
  },
);
