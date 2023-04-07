import styled from "@emotion/styled";

import { ReactComponent as CrossIcon } from "~/assets/icons/cross.svg";
import { ReactComponent as CircleIcon } from "~/assets/icons/circle.svg";

import { aqua, orange } from "~/ui-kit/colors";

const LogoBase = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",

  flexShrink: 0,

  alignItems: "center",

  gap: "0.25rem",

  "& > svg": {
    width: "24px",
    height: "24px",
  },

  "& > svg:first-of-type": {
    color: aqua[400],
  },

  "& > svg:last-of-type": {
    color: orange[400],
  },
}));

export function Logo() {
  return (
    <LogoBase>
      <CrossIcon />
      <CircleIcon />
    </LogoBase>
  );
}
