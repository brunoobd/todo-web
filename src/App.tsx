import theme from "@theme/index";

import { ThemeProvider } from "styled-components";

import { Container, Form, GlobalStyle } from "./styles.ts";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />

      <Container>
        <Form>
          <Input placeholder={"Adicione uma nova tarefa"} />

          <Button />
        </Form>
      </Container>
    </ThemeProvider>
  );
}

export default App;
