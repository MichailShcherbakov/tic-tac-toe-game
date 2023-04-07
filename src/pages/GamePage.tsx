import styled from "@emotion/styled";
import { BattleField } from "~/components/BattleField";
import { GameStatistics } from "~/components/GameStatistics/GameStatistics";
import { Logo } from "~/components/Logo";
import { RedoButton } from "~/components/RedoButton";
import { TurnDisplay } from "~/components/TurnDisplay";
import { UiGird } from "~/ui-kit/Grid";
import { UiStack } from "~/ui-kit/Stack";
import { slate } from "~/ui-kit/colors";

export const GamePageLayout = styled(UiStack)(() => ({
  width: "100%",
  height: "100vh",

  paddingTop: "8rem",

  backgroundColor: slate[500],
}));

GamePageLayout.defaultProps = {
  direction: "column",
  horizontal: "center",
};

export const GamePageContainer = styled(UiStack)(() => ({
  gap: "1rem",
}));

GamePageContainer.defaultProps = {
  direction: "column",
};

export const GamePageHeader = styled(UiGird)(() => ({})).withComponent(
  "header",
);

GamePageHeader.defaultProps = {
  cols: 3,
};

export const GamePageFooter = styled(UiGird)(() => ({})).withComponent(
  "footer",
);

GamePageFooter.defaultProps = {
  cols: 3,
};

export interface GamePageProps {}

export function GamePage(props: GamePageProps) {
  return (
    <GamePageLayout {...props}>
      <GamePageContainer>
        <GamePageHeader>
          <Logo />
          <TurnDisplay turn="circle" />
          <UiStack direction="row" horizontal="end">
            <RedoButton />
          </UiStack>
        </GamePageHeader>
        <BattleField />
        <GamePageFooter>
          <GameStatistics color="secondary" title="X (You)" count={14} />
          <GameStatistics color="neutral" title="TIES" count={32} />
          <GameStatistics color="primary" title="Y (CPU)" count={11} />
        </GamePageFooter>
      </GamePageContainer>
    </GamePageLayout>
  );
}
