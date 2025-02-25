import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Category {
  id: number;
  value: string;
}

interface Todo {
  id: number;
  categoryId: number;
  title: string;
  status: "todo" | "doing" | "done" | "pending";
}

interface TodoStoreProps {
  isDark: boolean;
  categories: Category[];
  todos: Todo[];
  sort: "new" | "old";
  filter: "all" | "todo" | "doing" | "done" | "pending";
  selectedCategory: number;
  addCategory: (newCategory: Category) => void;
  editCategory: (id: number, newValue: string) => void;
  deleteCategory: (id: number) => void;
  setSelectedCategory: (id: number) => void;
  addTodo: (task: Todo) => void;
  updateTodoStatus: (id: number, status: "todo" | "doing" | "done") => void;
}

export const useTodoStore = create<TodoStoreProps>()(
  persist(
    (set, get) => ({
      isDark: false,
      categories: [
        { id: 1, value: "카테고리1" },
        { id: 2, value: "카테고리2" },
        { id: 3, value: "카테고리3" },
      ],
      todos: [
        {
          id: 1,
          categoryId: 1,
          title: "할일1",
          status: "todo",
        },
        {
          id: 2,
          categoryId: 2,
          title: "할일2",
          status: "doing",
        },
        {
          id: 3,
          categoryId: 3,
          title: "할일3",
          status: "done",
        },
        {
          id: 4,
          categoryId: 1,
          title: "할일1",
          status: "todo",
        },
        {
          id: 5,
          categoryId: 3,
          title: "할일2",
          status: "todo",
        },
      ],
      sort: "new",
      filter: "all",
      selectedCategory: 1,

      // categories
      addCategory: (newCategory: Category) =>
        set((state) => ({
          categories: [...state.categories, newCategory],
        })),
      editCategory: (id: number, newValue: string) =>
        set((state) => ({
          categories: state.categories.map((cate) =>
            cate.id === id ? { ...cate, value: newValue } : cate
          ),
        })),
      deleteCategory: (id: number) =>
        set((state) => ({
          categories: state.categories.filter((cate) => cate.id !== id),
        })),
      setSelectedCategory: (id: number) => set({ selectedCategory: id }),

      // todos
      addTodo: (task: Todo) =>
        set((state) => ({
          todos: [...state.todos, task],
        })),
      updateTodoStatus: (id: number, status: "todo" | "doing" | "done") =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, status } : todo
          ),
        })),
    }),
    {
      name: "react-todoapp",
    }
  )
);
