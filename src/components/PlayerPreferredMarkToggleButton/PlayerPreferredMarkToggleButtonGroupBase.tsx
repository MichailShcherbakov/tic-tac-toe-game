import styled from "@emotion/styled";
import { UiStack, UiStackProps } from "~/ui-kit/Stack";
import { slate } from "~/ui-kit/colors";

export interface PlayerPreferredMarkToggleButtonGroupBaseProps
  extends UiStackProps {}

export const PlayerPreferredMarkToggleButtonGroupBase = styled(
  UiStack,
)<PlayerPreferredMarkToggleButtonGroupBaseProps>(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: slate[600],

  borderRadius: theme.spacing(1),
}));

PlayerPreferredMarkToggleButtonGroupBase.defaultProps = {
  fullWidth: true,
  direction: "row",
  gap: 1,
};
