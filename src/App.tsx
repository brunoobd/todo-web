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

import {
  Button,
  Header,
  Input,
  TaskCounter,
  TaskItem,
} from "@components/index.ts";

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

    const taskIds = tasks.map((task) => task.id);
    const newTaskId = taskIds.length ? Math.max(...taskIds) + 1 : 0;

    setTasks((prevState) => [
      ...prevState,
      { id: newTaskId, title: newTask, completed: false },
    ]);
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

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
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
            <TaskCounter
              title={"Tarefas criadas"}
              createdTasks={tasks.length}
            />
            <TaskCounter
              title={"Concluídas"}
              createdTasks={tasks.length}
              completedTasks={tasksCompleted.length}
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
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </TaskList>
        </TaskContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
