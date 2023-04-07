import styled from "@emotion/styled";
import { is } from "~/tools/is";

export interface UiStackProps extends React.HTMLAttributes<HTMLDivElement> {
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
}

export const UiStack = styled("div", {
  shouldForwardProp: propName =>
    propName !== "direction" &&
    propName !== "horizontal" &&
    propName !== "vertical",
})<UiStackProps>(({ direction = "row", horizontal, vertical }) => ({
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
}));
