import GlobalStyle from "GlobalStyle";
import Layout from "Layout";
import theme from "Theme";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
// TODO state 제대로, 구조 파악이 먼저
function App() {
  const [themeState, setThemeState] = useState(theme["light"]);
  return (
    <>
      <ThemeProvider theme={theme["dark"]}>
        <GlobalStyle />
        <Layout themeState={themeState} setThemeState={setThemeState} />;
      </ThemeProvider>
    </>
  );
}

export default App;
