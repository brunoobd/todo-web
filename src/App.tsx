import { ThemeProvider } from "styled-components";

import theme from "@theme/index";
import { GlobalStyle } from "./styles/globalStyles";
import { Header } from "@components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />

      
    </ThemeProvider>
  );
}

export default App;
