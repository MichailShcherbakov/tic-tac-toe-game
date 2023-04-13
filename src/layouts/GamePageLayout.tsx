import styled from "@emotion/styled";
import { UiStack, UiStackProps } from "~/ui-kit/Stack";
import { slate } from "~/ui-kit/colors";

export interface GamePageLayoutProps extends UiStackProps {}

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
