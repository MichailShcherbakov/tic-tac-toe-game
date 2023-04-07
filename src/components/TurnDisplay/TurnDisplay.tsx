import styled from "@emotion/styled";
import { UiPaper } from "~/ui-kit/Paper";

import { ReactComponent as CrossIcon } from "~/assets/icons/cross.svg";
import { ReactComponent as CircleIcon } from "~/assets/icons/circle.svg";

const TurnDisplayBase = styled(UiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",
  justifyContent: "center",

  gap: theme.spacing(1),

  borderRadius: theme.spacing(1),

  padding: theme.spacing(0.75, 0.75),
}));

TurnDisplayBase.defaultProps = {
  variant: "outlined",
  shadowWeight: 0.5,
};

const TurnDisplayTitle = styled("span")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",

  fontSize: theme.spacing(2),
  fontWeight: 700,

  textTransform: "uppercase",
}));

const TurnDisplayIconBase = styled("picture")(({ theme }) => ({
  "& > *": {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
}));

export interface TurnDisplayProps {
  turn: "cross" | "circle";
}

export function TurnDisplay({ turn, ...props }: TurnDisplayProps) {
  return (
    <TurnDisplayBase {...props}>
      <TurnDisplayIconBase>
        {turn === "cross" && <CrossIcon />}
        {turn === "circle" && <CircleIcon />}
      </TurnDisplayIconBase>
      <TurnDisplayTitle>Turn</TurnDisplayTitle>
    </TurnDisplayBase>
  );
}
