import {
  GameStatisticsBase,
  GameStatisticsBaseProps,
} from "./GameStatisticsBase";
import { GameStatisticsCount } from "./GameStatisticsCount";
import { GameStatisticsTitle } from "./GameStatisticsTitle";

export interface GameStatisticsSectionProps extends GameStatisticsBaseProps {
  title: string;
  count: number;
}

export function GameStatisticsSection({
  title,
  count,
  ...props
}: GameStatisticsSectionProps) {
  return (
    <GameStatisticsBase {...props}>
      <GameStatisticsTitle>{title}</GameStatisticsTitle>
      <GameStatisticsCount>{count}</GameStatisticsCount>
    </GameStatisticsBase>
  );
}
