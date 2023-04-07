import styled from "@emotion/styled";
import { UiPaper, UiPaperProps } from "~/ui-kit/Paper";
import { slate } from "~/ui-kit/colors";

interface GameStatisticsBaseProps extends UiPaperProps {}

const GameStatisticsBase = styled(UiPaper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",

  gap: "0.25rem",

  padding: theme.spacing(0.75, 0),
}));

GameStatisticsBase.defaultProps = {
  elevation: false,
};

const GameStatisticsTitle = styled("span")(() => ({
  fontSize: "0.75rem",
  fontWeight: 500,

  color: slate[500],

  textTransform: "uppercase",
}));

const GameStatisticsCount = styled("span")(() => ({
  fontSize: "1.5rem",
  fontWeight: 700,

  color: slate[500],
}));

export interface GameStatisticsProps extends GameStatisticsBaseProps {
  title: string;
  count: number;
}

export function GameStatistics({
  title,
  count,
  ...props
}: GameStatisticsProps) {
  return (
    <GameStatisticsBase {...props}>
      <GameStatisticsTitle>{title}</GameStatisticsTitle>
      <GameStatisticsCount>{count}</GameStatisticsCount>
    </GameStatisticsBase>
  );
}
