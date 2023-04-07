import { ThemeProvider } from "@emotion/react";
import { HomePage } from "./pages/HomePage";
import { theme } from "./ui-kit/theme";
import { GamePage } from "./pages/GamePage";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
      {/* <GamePage /> */}
    </ThemeProvider>
  );
}
