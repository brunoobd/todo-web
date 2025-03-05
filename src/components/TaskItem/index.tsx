import { Task } from "@models/Task";
import { Button, Check, Container, RadioButton, Title } from "./styles";
import { Trash } from "@phosphor-icons/react";

type Props = Task & {
  onCompleteTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
};

export const TaskItem = ({
  id,
  title,
  completed,
  onCompleteTask,
  onDeleteTask,
}: Props) => {
  const handleCompleteTask = () => onCompleteTask(id);

  const handleDeleteTask = () => onDeleteTask(id);

  return (
    <Container $completed={completed}>
      <RadioButton $completed={completed} onClick={handleCompleteTask}>
        {completed && <Check />}
      </RadioButton>

      <Title $completed={completed}>{title}</Title>

      <Button onClick={handleDeleteTask}>
        <Trash size={24} />
      </Button>
    </Container>
  );
};
