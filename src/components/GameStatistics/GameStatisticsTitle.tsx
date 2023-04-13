import styled from "@emotion/styled";
import { slate } from "~/ui-kit/colors";

export const GameStatisticsTitle = styled("span")(() => ({
  fontSize: "0.75rem",
  fontWeight: 500,

  color: slate[500],

  textTransform: "uppercase",
}));
