import React, { useState } from "react";

interface ObjectType {
  id: number;
  text: string | undefined;
  completed: boolean;
}
const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<ObjectType[]>([
    { id: 1, text: "hola! amigos.", completed: false },
    { id: 2, text: "Hello! Friends.", completed: true },
    { id: 3, text: "ki obosta! jonogon.", completed: false },
  ]);
  const [inputValue, setInputValue] = useState<string>();
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const handleInputField = () => {
    const newTodo: ObjectType = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="flex items-center flex-col justify-center min-h-screen space-y-4">
      <h1 className="text-3xl"> Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${todo.completed ? " line-through" : ""}`}
            onClick={() => handleToggle(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add todo List"
        className="border border-gray-200 px-3 py-2 rounded"
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button
        onClick={() => handleInputField()}
        className=" bg-red-500 px-3 py-1 text-white rounded"
      >
        Add
      </button>
    </div>
  );
};

export default TodoList;
