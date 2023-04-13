import styled from "@emotion/styled";
import { UiButton, UiButtonProps } from "~/ui-kit/Button";

export interface PlayerToggleButtonProps extends UiButtonProps {}

export const PlayerToggleButton = styled(UiButton)(({ theme }) => ({
  height: theme.spacing(6),

  borderRadius: theme.spacing(1),

  "& > svg": {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

PlayerToggleButton.defaultProps = {
  elevation: false,
  fullWidth: true,
};
