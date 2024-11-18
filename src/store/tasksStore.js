import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTasksStore = create(
    persist(
        (set, get) => ({
            tasks: [],
            task: {},
            setTask: (task) => set({task}),
            setTasks: (tasks) => set({tasks}),
        }), {
            name: 'tasks',
            getStorage: () => createJSONStorage(() => localStorage)
        }
    )
);