import { ThemeProvider } from "styled-components";

import theme from "@theme/index";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>teste</h1>
    </ThemeProvider>
  );
}

export default App;
