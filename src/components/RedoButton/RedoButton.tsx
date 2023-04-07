import { UiButton } from "~/ui-kit/Button";

import { ReactComponent as RedoIcon } from "~/assets/icons/redo.svg";
import styled from "@emotion/styled";

const RedoButtonBase = styled(UiButton)(({ theme }) => ({
  borderRadius: theme.spacing(1),

  padding: theme.spacing(0.75, 0.75),

  "& > *": {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  },
}));

RedoButtonBase.defaultProps = {
  variant: "contained",
  color: "neutral",
  shadowWeight: 0.5,
};

export function RedoButton() {
  return (
    <RedoButtonBase>
      <RedoIcon />
    </RedoButtonBase>
  );
}
