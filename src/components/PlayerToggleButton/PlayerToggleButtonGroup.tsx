import {
  PlayerToggleButtonGroupBase,
  PlayerToggleButtonGroupBaseProps,
} from "./PlayerToggleButtonGroupBase";
import { PlayerToggleButton } from "./PlayerToggleButton";

import { ReactComponent as CrossIcon } from "~/assets/icons/cross.svg";
import { ReactComponent as CircleIcon } from "~/assets/icons/circle.svg";

export interface PlayerToggleButtonProps
  extends Omit<PlayerToggleButtonGroupBaseProps, "onChange"> {
  value: "cross" | "circle";
  onChange?: (value: "cross" | "circle" | null) => void;
}

export function PlayerToggleButtonGroup({
  value,
  onChange,
  ...props
}: PlayerToggleButtonProps) {
  function changePlayerHandler(val: "cross" | "circle") {
    if (value === val) return onChange?.(null);

    return onChange?.(val);
  }

  return (
    <PlayerToggleButtonGroupBase {...props}>
      <PlayerToggleButton
        variant={value === "cross" ? "contained" : "text"}
        onClick={() => changePlayerHandler("cross")}
      >
        <CrossIcon />
      </PlayerToggleButton>
      <PlayerToggleButton
        variant={value === "circle" ? "contained" : "text"}
        onClick={() => changePlayerHandler("circle")}
      >
        <CircleIcon />
      </PlayerToggleButton>
    </PlayerToggleButtonGroupBase>
  );
}
