import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface ITask {
  id: number;
  task: string;
  isComplete: boolean;
}

interface TodoAppProps {
  users: IUser[];
  tasks: ITask[];
  currentUser: IUser | null;

  // users
  setCurrentUser: (user: IUser | null) => void;
}

export const useTodoAppStore = create<TodoAppProps>()(
  persist(
    (set) => ({
      users: [],
      tasks: [],
      currentUser: null,

      // users
      setCurrentUser: (user: IUser | null) => set({ currentUser: user }),
    }),
    {
      name: "react-todoapp",
    }
  )
);
