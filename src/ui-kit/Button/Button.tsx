import styled from "@emotion/styled";
import { UiPaper, UiPaperProps } from "../Paper/Paper";
import { is } from "~/tools/is";

interface UiButtonBaseProps extends UiPaperProps<HTMLButtonElement> {
  /**
   * @default true
   */
  isInteractive?: boolean;
}

const UiButtonBase = styled(UiPaper)<UiButtonBaseProps>(
  ({ shadowWeight = 8, elevation = true, isInteractive = true }) => ({
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",

    fontSize: "1rem",
    fontWeight: 700,

    textTransform: "uppercase",

    cursor: "pointer",

    ...is(elevation, isInteractive, {
      "&:active": {
        transform: `translateY(${shadowWeight}px)`,
        boxShadow: "none",
      },
    }),
  }),
);

export interface UiButtonProps extends UiButtonBaseProps {}

export function UiButton(props: UiButtonProps) {
  return <UiButtonBase {...props} />;
}
