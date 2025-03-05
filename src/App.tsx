import { ThemeProvider } from "styled-components";
import theme from "@theme/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>teste</h1>
    </ThemeProvider>
  );
}

export default App;
