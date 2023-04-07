import styled from "@emotion/styled";
import { UiPaper, UiPaperProps } from "~/ui-kit/Paper";

import { ReactComponent as CrossIcon } from "~/assets/icons/cross.svg";
import { ReactComponent as CircleIcon } from "~/assets/icons/circle.svg";
import { UiButton } from "~/ui-kit/Button";

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

export interface CellProps extends Omit<CellBaseProps, "onChange"> {
  value?: "cross" | "circle";
  onChange?: (
    e: React.MouseEvent<HTMLElement>,
    value: "cross" | "circle",
  ) => void;
}

export function Cell({ value, onChange, ...props }: CellProps) {
  return (
    <CellBase
      {...props}
      isInteractive={!value}
      variant="outlined"
      color={value === "cross" ? "secondary" : "primary"}
    >
      {value === "cross" && <CrossIcon />}
      {value === "circle" && <CircleIcon />}
    </CellBase>
  );
}
