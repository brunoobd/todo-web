import { ClipboardText, Container, Content, Subtitle, Title } from "./styles";

export const TaskEmpty = () => (
  <Container>
    <ClipboardText />

    <Content>
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
    </Content>
  </Container>
);
