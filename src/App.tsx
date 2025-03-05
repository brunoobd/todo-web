import theme from "@theme/index";

import { ThemeProvider } from "styled-components";

import { Container, Form, GlobalStyle } from "./styles.ts";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TaskCounter } from "@components/TaskCounter/index.tsx";

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

        <TaskCounter title={"Tarefas criadas"} count={0} />
        <TaskCounter title={"Concluídas"} count={1} variant={"PURPLE"} />
      </Container>
    </ThemeProvider>
  );  
}

export default App;
