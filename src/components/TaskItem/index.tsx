import { Task } from "@models/Task";
import { Check, Container, RadioButton, Title } from "./styles";
import { Trash } from "@phosphor-icons/react";

type Props = Task & {
  onCompleteTask: (taskId: number) => void;
};

export const TaskItem = ({ id, title, completed, onCompleteTask }: Props) => {
  const handleCompleteTask = () => onCompleteTask(id);

  return (
    <Container $completed={completed}>
      <RadioButton $completed={completed} onClick={handleCompleteTask}>
        {completed && <Check />}
      </RadioButton>

      <Title $completed={completed}>{title}</Title>

      <Trash size={24} />
    </Container>
  );
};
