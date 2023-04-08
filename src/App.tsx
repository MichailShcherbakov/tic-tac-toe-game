import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import { theme } from "./ui-kit/theme";
import { router } from "./router";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
