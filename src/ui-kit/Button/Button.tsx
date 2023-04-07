import styled from "@emotion/styled";
import { UiPaper, UiPaperProps } from "../Paper/Paper";
import { is } from "~/tools/is";

interface UiButtonProps extends UiPaperProps<HTMLButtonElement> {
  /**
   * @default true
   */
  isInteractive?: boolean;
  /**
   * @default false
   */
  fullWidth?: boolean;
}

export const UiButton = styled(UiPaper, {
  shouldForwardProp: propName =>
    propName !== "isInteractive" && propName !== "fullWidth",
})<UiButtonProps>(
  ({
    theme,
    shadowWeight = 1,
    elevation = true,
    isInteractive = true,
    fullWidth = false,
  }) => ({
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",

    fontSize: "1rem",
    fontWeight: 700,

    textTransform: "uppercase",

    cursor: "pointer",

    userSelect: "none",

    ...is(elevation, isInteractive, {
      "&:active": {
        transform: `translateY(${theme.spacing(shadowWeight)})`,
        boxShadow: "none",
      },
    }),

    ...is(fullWidth, {
      width: "100%",
    }),
  }),
).withComponent("button");
