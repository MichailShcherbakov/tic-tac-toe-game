import styled from "@emotion/styled";
import { UiPaper, UiPaperProps } from "~/ui-kit/Paper";

export interface GameStatisticsBaseProps extends UiPaperProps {}

export const GameStatisticsBase = styled(UiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  gap: "0.25rem",

  padding: theme.spacing(0.75, 0),

  userSelect: "none",
}));

GameStatisticsBase.defaultProps = {
  elevation: false,
};
