import styled from "@emotion/styled";

export const TurnDisplayIconBase = styled("picture")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",

  "& > *": {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
}));
