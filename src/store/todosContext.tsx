import { createContext } from "react";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContextType = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
};

export const TodosContext = createContext<TodosContextType | null>(null);