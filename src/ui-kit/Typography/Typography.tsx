import styled from "@emotion/styled";
import { is } from "~/tools/is";
import { PaletteColor } from "../theme";
import { aqua, grey, orange } from "../colors";

export interface UiTypographyProps {
  /**
   * @default "body1"
   */
  variant?: "button" | "body1";
  /**
   * @default "neutral"
   */
  color?: PaletteColor;
}

export const UiTypography = styled("p", {
  shouldForwardProp: propName => propName !== "variant" && propName !== "color",
})<UiTypographyProps>(({ theme, variant = "body1", color = "neutral" }) => ({
  ...is(variant === "button", {
    fontSize: theme.spacing(2),
    fontWeight: 700,

    textTransform: "uppercase",
  }),

  ...is(variant === "body1", {
    fontSize: theme.spacing(1.5),
    fontWeight: 700,

    textTransform: "uppercase",
  }),

  ...is(color === "neutral", {
    color: grey[400],
  }),

  ...is(color === "primary", {
    color: orange[400],
  }),

  ...is(color === "secondary", {
    color: aqua[400],
  }),
}));
