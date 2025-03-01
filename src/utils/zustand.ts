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
  selectedCategory: Category | null;
  addCategory: (newCategory: Category) => void;
  editCategory: (id: number, newValue: string) => void;
  deleteCategory: (id: number) => void;
  setSelectedCategory: (category: Category | null) => void;
  addTodo: (task: Todo) => void;
  updateTodoStatus: (
    id: number,
    status: "todo" | "doing" | "done" | "pending"
  ) => void;
}

export const useTodoStore = create<TodoStoreProps>()(
  persist(
    (set, get) => ({
      isDark: false,
      categories: [{ id: 1, value: "Category1" }],
      todos: [
        {
          id: 1,
          categoryId: 1,
          title: "Add todos!",
          status: "todo",
        },
      ],
      sort: "new",
      filter: "all",
      selectedCategory: { id: 1, value: "Category1" },

      // 상태 리셋 메서드 추가
      clearStorage: () =>
        set({
          isDark: false,
          categories: [{ id: 1, value: "Category1" }],
          todos: [
            {
              id: 1,
              categoryId: 1,
              title: "Add todos!",
              status: "todo",
            },
          ],
          selectedCategory: { id: 1, value: "Category1" },
        }),

      // categories
      getCategories: () => {
        return get().categories;
      },
      getCategory: (id: number) => {
        return get().categories.find((category) => category.id === id);
      },
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
      setSelectedCategory: (category) => set({ selectedCategory: category }),

      // todos
      addTodo: (task: Todo) =>
        set((state) => ({
          todos: [...state.todos, task],
        })),
      updateTodoStatus: (
        id: number,
        status: "todo" | "doing" | "done" | "pending"
      ) =>
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
