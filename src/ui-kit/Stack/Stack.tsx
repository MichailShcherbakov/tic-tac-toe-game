import styled from "@emotion/styled";
import { is } from "~/tools/is";

export interface UiStackProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  /**
   * @default "row"
   */
  direction?: "row" | "column";
  /**
   * @default "start"
   */
  horizontal?: "start" | "center" | "between" | "end";
  /**
   * @default "start"
   */
  vertical?: "start" | "center" | "between" | "end";
  /**
   * @default 0
   */
  gap?: number;
  /**
   * @default false
   */
  fullWidth?: boolean;
}

export const UiStack = styled("div", {
  shouldForwardProp: propName =>
    propName !== "width" &&
    propName !== "height" &&
    propName !== "direction" &&
    propName !== "horizontal" &&
    propName !== "vertical" &&
    propName !== "gap" &&
    propName !== "fullWidth",
})<UiStackProps>(
  ({
    theme,
    width,
    height,
    direction = "row",
    horizontal = "start",
    vertical = "start",
    gap = 0,
    fullWidth = false,
  }) => ({
    display: "flex",
    flexDirection: direction,

    ...is(direction === "row", {
      alignItems: vertical,
      justifyContent: horizontal,
    }),

    ...is(direction === "column", {
      alignItems: horizontal,
      justifyContent: vertical,
    }),

    ...is(!!width, {
      width: theme.spacing(width!),
    }),

    ...is(!!height, {
      height: theme.spacing(height!),
    }),

    ...is(fullWidth, {
      width: "100%",
    }),

    gap: theme.spacing(gap),
  }),
);
