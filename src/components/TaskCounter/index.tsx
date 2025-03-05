import { Container, Counter, CounterText, Title } from "./styles";

type Props = {
  title: string;
  createdTasks: number;
  completedTasks?: number;
};

export const TaskCounter = ({ title, createdTasks, completedTasks }: Props) => {
  const hasCompletedTasks = completedTasks != undefined;

  return (
    <Container>
      <Title $variant={hasCompletedTasks ? "PURPLE" : "DEFAULT"}>{title}</Title>

      <Counter>
        <CounterText>
          {hasCompletedTasks && createdTasks !== 0
            ? `${completedTasks} de ${createdTasks}`
            : createdTasks}
        </CounterText>
      </Counter>
    </Container>
  );
};
