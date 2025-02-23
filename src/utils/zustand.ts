import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Category {
  id: number;
  value: string;
}

interface Task {
  id: number;
  categoryId: number;
  title: string;
  status: string;
}

interface TodoStore {
  isDark: boolean;
  categories: Category[];
  tasks: Task[];
  sort: "new" | "old";
  filter: "all" | "todo" | "doing" | "done" | "pending";
  addCategory: (newCategory: Category) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      isDark: false,
      categories: [
        { id: 1, value: "카테고리1" },
        { id: 2, value: "카테고리2" },
        { id: 3, value: "카테고리3" },
      ],
      tasks: [
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
          status: "todo",
        },
        {
          id: 3,
          categoryId: 3,
          title: "할일3",
          status: "todo",
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

      addCategory: (newCategory: Category) =>
        set((state) => ({
          categories: [...state.categories, newCategory],
        })),
    }),
    {
      name: "react-todoapp",
    }
  )
);
