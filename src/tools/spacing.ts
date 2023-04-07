export function spacing(
  type: "margin" | "padding",
  direction: "x" | "y",
  space: string,
) {
  return {
    [`${type}${direction === "x" ? "Left" : "Top"}`]: space,
    [`${type}${direction === "x" ? "Right" : "Bottom"}`]: space,
  };
}

export const marginX = (space: string) => spacing("margin", "x", space);
export const marginY = (space: string) => spacing("margin", "y", space);

export const paddingX = (space: string) => spacing("padding", "x", space);
export const paddingY = (space: string) => spacing("padding", "y", space);
