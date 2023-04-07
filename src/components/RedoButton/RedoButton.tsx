import { UiButton } from "~/ui-kit/Button";

import { ReactComponent as RedoIcon } from "~/assets/icons/redo.svg";
import styled from "@emotion/styled";
import { paddingX, paddingY } from "~/tools/spacing";

const RedoButtonBase = styled(UiButton)(() => ({
  width: "fit-content",

  borderRadius: "0.5rem",

  ...paddingX("0.75rem"),
  ...paddingY("0.75rem"),

  "& > *": {
    width: "1.5rem",
    height: "1.5rem",
  },
}));

RedoButtonBase.defaultProps = {
  variant: "contained",
  color: "neutral",
  shadowWeight: 4,
};

export function RedoButton() {
  return (
    <RedoButtonBase>
      <RedoIcon />
    </RedoButtonBase>
  );
}
