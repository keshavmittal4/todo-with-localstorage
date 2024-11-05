import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ]
})

export const useToDo = () => {
    return useContext(ToDoContext)
}