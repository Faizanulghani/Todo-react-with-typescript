import { useContext, useState } from "react";
import { TodosContext } from "./todosContext";
import type { Todo, TodosContextType } from "./todosContext";

export type TodosProviderProps = {
  children: React.ReactNode;
};

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo: TodosContextType["handleAddTodo"] = (task) => {
    setTodos((prev) => [
      {
        id: Math.random().toString(),
        task,
        completed: false,
        createdAt: new Date(),
      },
      ...prev,
    ]);
  };

  return (
    <TodosContext.Provider value={{ todos, handleAddTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const todosConsumer = useContext(TodosContext);
  if (!todosConsumer) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return todosConsumer;
};
