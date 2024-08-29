import React, { useState, useEffect, useMemo, useCallback } from 'react';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import style from './TodoList.module.css';

type Todo = {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;   
};

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            const parsedTodos = JSON.parse(savedTodos);
            setTodos(parsedTodos);
        }
    }, []);

    const handleAddTodo = (event: React.FormEvent) => {
        event.preventDefault();
        if (title.trim() === "" || description.trim() === "") {
            alert("Please provide both title and description.");
            return;
        }

        const newTodo: Todo = {
            id: Date.now(),
            title,
            description,
            isCompleted: false,
        };

        const updatedTodos = [newTodo, ...todos];
        setTodos(updatedTodos);
        setTitle("");
        setDescription("");

        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const handleToggleComplete = useCallback((id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
    }, []);

    const handleDeleteTodo = useCallback((id: number) => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.filter(todo => todo.id !== id);
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        });
    }, []);

    const filteredTodos = useMemo(() => {
        return todos.filter(todo => {
            if (filter === "completed") return todo.isCompleted;
            if (filter === "incomplete") return !todo.isCompleted;
            return true;
        });
    }, [todos, filter]);

    return (
        <div className={style.todo}>
            <NavigationMenu />
            <div className={style.todoContainer}>
                <div className={style.container}>
                    <h1 className={style.title}>Todo List</h1>
                    <form className={style.form} onSubmit={handleAddTodo}>
                        <input
                            type="text"
                            className={style.input}
                            placeholder="What do you need to do today?"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            className={style.descriptionInput}
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button className={style.button} type="submit">Add</button>
                    </form>
                    <div className={style.filter}>
                        <select onChange={(e) => setFilter(e.target.value as "all" | "completed" | "incomplete")} value={filter}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="incomplete">Incomplete</option>
                        </select>
                    </div>
                    <ul className={style.todoList}>
                        {filteredTodos.map(todo => (
                            <li key={todo.id} className={style.todoItem}>
                                <input
                                    type="checkbox"
                                    checked={todo.isCompleted}
                                    onChange={() => handleToggleComplete(todo.id)}
                                />
                                <span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
                                    {todo.title}
                                    <p>{todo.description}</p>
                                </span>
                                <button className={style.deleteButton} onClick={() => handleDeleteTodo(todo.id)}>✖</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoList;