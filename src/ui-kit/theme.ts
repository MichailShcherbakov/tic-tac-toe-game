import "@emotion/react";
import { Theme } from "@emotion/react";

export type PaletteColor = "neutral" | "primary" | "secondary";

declare module "@emotion/react" {
  export interface Theme {
    spacing(topLeftRightBottom: number): string;
    spacing(topBottom: number, leftRight: number): string;
    spacing(top: number, leftRight: number, bottom: number): string;
    spacing(top: number, right: number, bottom: number, left: number): string;
  }
}

function px(value: number): string {
  return `${value * 8}px`;
}

export const theme: Theme = {
  spacing: (...args: (number | undefined)[]): string => {
    return args
      .reduce((acc, dir) => {
        if (!dir) return acc;

        acc += px(dir) + " ";

        return acc;
      }, "")
      .trimEnd();
  },
};
