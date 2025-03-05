import { ChangeEvent, FormEvent, useState } from "react";

import theme from "@theme/index";

import { ThemeProvider } from "styled-components";

import { Task } from "./models/Task.ts";

import {
  Container,
  Form,
  GlobalStyle,
  TaskContainer,
  TaskHeader,
  TaskList,
} from "./styles.ts";

import { Button, Header, Input, TaskCounter } from "@components/index.ts";
import { TaskItem } from "@components/TaskItem/index.tsx";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Estudar TypeScript", completed: false },
    { id: 2, title: "Criar estrutura do projeto", completed: true },
    {
      id: 3,
      title: "Implementar funcionalidade de adicionar tarefas",
      completed: false,
    },
    {
      id: 4,
      title: "Estilizar aplicação com styled-components",
      completed: false,
    },
    { id: 5, title: "Testar funcionalidades", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");
  const tasksCompleted = tasks.filter((task) => task.completed);

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddNewTask = (event: FormEvent) => {
    event.preventDefault();

    if (newTask.trim().length) {
      const taskIds = tasks.map((task) => task.id);
      const newTaskId = taskIds.length ? Math.max(...taskIds) + 1 : 0;

      setTasks((prevState) => [
        ...prevState,
        { id: newTaskId, title: newTask, completed: false },
      ]);
    } else {
      window.alert("PARA DE BURLAR SEU LA JOY!!!!!!!!!!");
    }
  };

  const handleCompleteTask = (taskId: number) => {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />

      <Container>
        <Form>
          <Input
            placeholder={"Adicione uma nova tarefa"}
            value={newTask}
            onChange={handleNewTaskChange}
            required
          />

          <Button
            disabled={!newTask.trim().length}
            onClick={handleAddNewTask}
          />
        </Form>

        <TaskContainer>
          <TaskHeader>
            <TaskCounter title={"Tarefas criadas"} count={tasks.length} />
            <TaskCounter
              title={"Concluídas"}
              count={tasksCompleted.length}
              variant={"PURPLE"}
            />
          </TaskHeader>

          <TaskList>
            {tasks.map(({ id, title, completed }) => (
              <TaskItem
                key={id}
                id={id}
                title={title}
                completed={completed}
                onCompleteTask={handleCompleteTask}
              />
            ))}
          </TaskList>
        </TaskContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
