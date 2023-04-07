import { Logo } from "~/components/Logo";
import { PlayerToggleButtonGroup } from "~/components/PlayerToggleButton/PlayerToggleButtonGroup";
import { HomePageLayout, HomePageLayoutProps } from "~/layouts/HomePageLayout";
import { UiButton } from "~/ui-kit/Button";
import { UiPaper } from "~/ui-kit/Paper";
import { UiStack } from "~/ui-kit/Stack";
import { UiTypography } from "~/ui-kit/Typography/Typography";

export interface HomePageProps extends HomePageLayoutProps {}

export function HomePage(props: HomePageProps) {
  return (
    <HomePageLayout {...props}>
      <UiStack direction="column" horizontal="center" width={46} gap={4}>
        <Logo />
        <UiPaper fullWidth variant="outlined">
          <UiStack direction="column" horizontal="center" gap={2}>
            <UiTypography>{"Pick player 1's mark"}</UiTypography>
            <PlayerToggleButtonGroup value="circle" />
            <UiTypography>{"Remember: X goes first"}</UiTypography>
          </UiStack>
        </UiPaper>
        <UiStack fullWidth direction="column" horizontal="center" gap={2}>
          <UiButton fullWidth color="primary">
            New Game (vs cpu)
          </UiButton>
          <UiButton fullWidth color="secondary">
            New Game (vs player)
          </UiButton>
        </UiStack>
      </UiStack>
    </HomePageLayout>
  );
}
