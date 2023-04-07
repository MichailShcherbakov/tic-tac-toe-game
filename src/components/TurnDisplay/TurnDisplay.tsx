import styled from "@emotion/styled";
import { UiPaper } from "~/ui-kit/Paper";

import { ReactComponent as CrossIcon } from "~/assets/icons/cross.svg";
import { ReactComponent as CircleIcon } from "~/assets/icons/circle.svg";
import { paddingX, paddingY } from "~/tools/spacing";

const TurnDisplayBase = styled(UiPaper)(() => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",
  justifyContent: "center",

  gap: "0.5rem",

  borderRadius: "0.5rem",

  ...paddingX("0.75rem"),
  ...paddingY("0.75rem"),
}));

TurnDisplayBase.defaultProps = {
  variant: "outlined",
  shadowWeight: 4,
};

const TurnDisplayTitle = styled("span")(() => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",

  fontSize: "1rem",
  fontWeight: 700,

  textTransform: "uppercase",
}));

const TurnDisplayIconBase = styled("picture")(() => ({
  "& > *": {
    width: "1rem",
    height: "1rem",
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
