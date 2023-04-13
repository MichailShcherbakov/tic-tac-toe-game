import styled from "@emotion/styled";

export const TurnDisplayTitle = styled("span")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",

  fontSize: theme.spacing(2),
  fontWeight: 700,

  textTransform: "uppercase",
}));
