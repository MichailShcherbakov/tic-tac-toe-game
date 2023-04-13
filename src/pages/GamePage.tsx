import styled from "@emotion/styled";
import { BattleField } from "~/components/BattleField";
import { GameStatistics } from "~/components/GameStatistics/GameStatistics";
import { Logo } from "~/components/Logo";
import { ResetButton } from "~/components/ResetButton";
import { TurnDisplay } from "~/components/TurnDisplay";
import { GameStatisticsProvider } from "~/hooks/useGameStatistics";
import { TicTacToeEngineProvider } from "~/hooks/useTicTacToeEngine";
import { GamePageLayout, GamePageLayoutProps } from "~/layouts/GamePageLayout";
import { TicTacToeEngine } from "~/modules/TicTacToeEngine";
import {
  Player,
  PlayerKindEnum,
  PlayerMarkEnum,
} from "~/modules/TicTacToeEngine/Player";
import { UiGird } from "~/ui-kit/Grid";
import { UiStack } from "~/ui-kit/Stack";

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

const engine = new TicTacToeEngine();

engine
  .addPlayer(new Player(PlayerKindEnum.HUMAN, PlayerMarkEnum.CROSS))
  .addPlayer(new Player(PlayerKindEnum.AI, PlayerMarkEnum.CIRCLE));

export interface GamePageProps extends GamePageLayoutProps {}

export function GamePage(props: GamePageProps) {
  return (
    <TicTacToeEngineProvider engine={engine}>
      <GameStatisticsProvider>
        <GamePageLayout {...props}>
          <GamePageContainer>
            <GamePageHeader>
              <Logo />
              <TurnDisplay />
              <UiStack direction="row" horizontal="end">
                <ResetButton />
              </UiStack>
            </GamePageHeader>
            <BattleField />
            <GamePageFooter>
              <GameStatistics />
            </GamePageFooter>
          </GamePageContainer>
        </GamePageLayout>
      </GameStatisticsProvider>
    </TicTacToeEngineProvider>
  );
}
