import styled from "@emotion/styled";
import { UiStack, UiStackProps } from "~/ui-kit/Stack";
import { slate } from "~/ui-kit/colors";

export interface HomePageLayoutProps extends UiStackProps {}

export const HomePageLayout = styled(UiStack)(() => ({
  width: "100%",
  height: "100vh",

  paddingTop: "8rem",

  backgroundColor: slate[500],
}));

HomePageLayout.defaultProps = {
  direction: "column",
  horizontal: "center",
};
