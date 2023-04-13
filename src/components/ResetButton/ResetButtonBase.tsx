import styled from "@emotion/styled";
import { UiButton, UiButtonProps } from "~/ui-kit/Button";

export interface ResetButtonBaseProps extends UiButtonProps {}

export const ResetButtonBase = styled(UiButton)(({ theme }) => ({
  borderRadius: theme.spacing(1),

  padding: theme.spacing(0.75, 0.75),

  "& > *": {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  },
}));

ResetButtonBase.defaultProps = {
  variant: "contained",
  color: "neutral",
  shadowWeight: 0.5,
};
