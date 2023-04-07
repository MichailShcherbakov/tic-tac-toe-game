import styled from "@emotion/styled";

export interface UiGridProps {
  /**
   * @default 1
   */
  cols?: number;
}

export const UiGird = styled("div", {
  shouldForwardProp: propName => propName !== "cols",
})<UiGridProps>(({ cols = 1 }) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
  width: "100%",
  gap: "1rem",
}));
