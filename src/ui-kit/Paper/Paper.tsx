import styled from "@emotion/styled";
import { aqua, grey, orange, slate } from "../colors";
import { is } from "~/tools/is";

interface UiPaperBaseProps<TElement = HTMLElement>
  extends React.HTMLAttributes<TElement> {
  /**
   * @default
   * true
   */
  elevation?: boolean;
  /**
   * @default "contained"
   */
  variant?: "outlined" | "contained";
  /**
   * @default "neutral"
   */
  color?: "neutral" | "primary" | "secondary";
  /**
   * in px
   * @default
   * 8
   */
  shadowWeight?: number;
}

const UiPaperBase = styled("button", {
  shouldForwardProp: propName =>
    propName !== "elevation" &&
    propName !== "variant" &&
    propName !== "color" &&
    propName !== "shadowWeight",
})<UiPaperBaseProps>(
  ({
    variant = "contained",
    color = "neutral",
    elevation = true,
    shadowWeight = 8,
  }) => ({
    borderRadius: "0.75rem",

    padding: "1rem",

    background: "none",
    border: "none",

    ...is(elevation, {
      marginBottom: `${shadowWeight}px`,
    }),

    ...is(color === "neutral", variant === "outlined", {
      color: grey[400],
      backgroundColor: slate[400],

      ...is(elevation, {
        boxShadow: `0 ${shadowWeight}px 0 ${slate[600]}, 0 ${shadowWeight}px 0 ${slate[600]}`,
      }),
    }),

    ...is(color === "neutral", variant === "contained", {
      color: slate[500],
      backgroundColor: grey[400],

      ...is(elevation, {
        boxShadow: `0 ${shadowWeight}px 0 ${grey[500]}, 0 ${shadowWeight}px 0 ${grey[500]}`,
      }),
    }),

    ...is(color === "primary", variant === "outlined", {
      color: orange[400],
      backgroundColor: slate[400],

      ...is(elevation, {
        boxShadow: `0 ${shadowWeight}px 0 ${slate[600]}, 0 ${shadowWeight}px 0 ${slate[600]}`,
      }),
    }),

    ...is(color === "primary", variant === "contained", {
      color: slate[500],
      backgroundColor: orange[400],

      ...is(elevation, {
        boxShadow: `0 ${shadowWeight}px 0 ${orange[500]}, 0 ${shadowWeight}px 0 ${orange[500]}`,
      }),
    }),

    ...is(color === "secondary", variant === "outlined", {
      color: aqua[400],
      backgroundColor: slate[400],

      ...is(elevation, {
        boxShadow: `0 ${shadowWeight}px 0 ${slate[600]}, 0 ${shadowWeight}px 0 ${slate[600]}`,
      }),
    }),

    ...is(color === "secondary", variant === "contained", {
      color: slate[500],
      backgroundColor: aqua[400],

      ...is(elevation, {
        boxShadow: `0 ${shadowWeight}px 0 ${aqua[500]}, 0 ${shadowWeight}px 0 ${aqua[500]}`,
      }),
    }),
  }),
);

export interface UiPaperProps<TElement = HTMLElement>
  extends UiPaperBaseProps<TElement> {}

export function UiPaper(props: UiPaperProps) {
  return <UiPaperBase {...props} />;
}
