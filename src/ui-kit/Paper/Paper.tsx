import styled from "@emotion/styled";
import { PaletteColor } from "../theme";
import { is } from "~/tools/is";
import { aqua, grey, orange, slate } from "../colors";
import { createBoxShadow } from "./helpers/createBoxShadow";

export interface UiPaperProps<TElement = HTMLElement>
  extends React.HTMLAttributes<TElement> {
  /**
   * @default
   * true
   */
  elevation?: boolean;
  /**
   * @default "contained"
   */
  variant?: "outlined" | "contained" | "text";
  /**
   * @default "neutral"
   */
  color?: PaletteColor;
  /**
   * @default
   * 1
   */
  shadowWeight?: number;
  /**
   * @default
   * false
   */
  fullWidth?: boolean;
}

export const UiPaper = styled("div", {
  shouldForwardProp: propName =>
    propName !== "elevation" &&
    propName !== "variant" &&
    propName !== "color" &&
    propName !== "shadowWeight" &&
    propName !== "fullWidth",
})<UiPaperProps>(
  ({
    theme,
    variant = "contained",
    color = "neutral",
    elevation = true,
    shadowWeight = 1,
    fullWidth = false,
  }) => ({
    borderRadius: theme.spacing(1.5),

    padding: theme.spacing(2),

    background: "none",
    border: "none",

    ...is(fullWidth, {
      width: "100%",
    }),

    ...is(elevation, {
      marginBottom: theme.spacing(shadowWeight),
    }),

    ...is(color === "neutral", variant === "outlined", {
      color: grey[400],
      backgroundColor: slate[400],

      ...is(elevation, {
        boxShadow: createBoxShadow(theme.spacing(shadowWeight), slate[600]),
      }),
    }),

    ...is(color === "neutral", variant === "contained", {
      color: slate[500],
      backgroundColor: grey[400],

      ...is(elevation, {
        boxShadow: createBoxShadow(theme.spacing(shadowWeight), grey[500]),
      }),
    }),

    ...is(color === "neutral", variant === "text", {
      color: grey[400],
    }),

    ...is(color === "primary", variant === "outlined", {
      color: orange[400],
      backgroundColor: slate[400],

      ...is(elevation, {
        boxShadow: createBoxShadow(theme.spacing(shadowWeight), slate[600]),
      }),
    }),

    ...is(color === "primary", variant === "contained", {
      color: slate[500],
      backgroundColor: orange[400],

      ...is(elevation, {
        boxShadow: createBoxShadow(theme.spacing(shadowWeight), orange[500]),
      }),
    }),

    ...is(color === "primary", variant === "text", {
      color: orange[400],
    }),

    ...is(color === "secondary", variant === "outlined", {
      color: aqua[400],
      backgroundColor: slate[400],

      ...is(elevation, {
        boxShadow: createBoxShadow(theme.spacing(shadowWeight), slate[600]),
      }),
    }),

    ...is(color === "secondary", variant === "contained", {
      color: slate[500],
      backgroundColor: aqua[400],

      ...is(elevation, {
        boxShadow: createBoxShadow(theme.spacing(shadowWeight), aqua[500]),
      }),
    }),

    ...is(color === "secondary", variant === "text", {
      color: aqua[400],
    }),
  }),
);
