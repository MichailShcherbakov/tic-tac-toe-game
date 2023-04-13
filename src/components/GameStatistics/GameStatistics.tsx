import { observer } from "mobx-react-lite";
import { useGameStatistics } from "~/hooks/useGameStatistics";
import { GameStatisticsSection } from "./GameStatisticsSection";

export interface GameStatisticsProps {}

export const GameStatistics = observer((_: GameStatisticsProps) => {
  const { statistics } = useGameStatistics();

  return (
    <>
      <GameStatisticsSection
        color="secondary"
        title="X (You)"
        count={statistics.winNum}
      />
      <GameStatisticsSection
        color="neutral"
        title="TIES"
        count={statistics.tieNum}
      />
      <GameStatisticsSection
        color="primary"
        title="Y (AI)"
        count={statistics.lossNum}
      />
    </>
  );
});
