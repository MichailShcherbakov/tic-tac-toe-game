import styled from "@emotion/styled";
import { UiPaper, UiPaperProps } from "~/ui-kit/Paper";

export interface TurnDisplayBaseProps extends UiPaperProps {}

export const TurnDisplayBase = styled(UiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",
  justifyContent: "center",

  gap: theme.spacing(1),

  borderRadius: theme.spacing(1),

  userSelect: "none",

  padding: theme.spacing(0.75, 0.75),
}));

TurnDisplayBase.defaultProps = {
  variant: "outlined",
  shadowWeight: 0.5,
};
