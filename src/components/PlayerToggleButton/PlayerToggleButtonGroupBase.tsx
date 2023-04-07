import styled from "@emotion/styled";
import { UiStack, UiStackProps } from "~/ui-kit/Stack";
import { slate } from "~/ui-kit/colors";

export interface PlayerToggleButtonGroupBaseProps extends UiStackProps {}

export const PlayerToggleButtonGroupBase = styled(
  UiStack,
)<PlayerToggleButtonGroupBaseProps>(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: slate[600],

  borderRadius: theme.spacing(1),
}));

PlayerToggleButtonGroupBase.defaultProps = {
  fullWidth: true,
  direction: "row",
  gap: 1,
};
