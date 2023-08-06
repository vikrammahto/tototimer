import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import SingleTodo from './SingleTodo';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todos.length > 0) {
      if (text.trim() !== '') {
        //if text field is not empty then store it in state
        setTodos((prev) => [
          ...prev,
          {
            id: Date.now(),
            task: text,
            completed: false,
          },
        ]);
        setText('');
        console.log(todos);
      } else {
        window.alert('Please enter something'); //if text is empty then show error message
      }
    } else {
      setTodos(() => [
        {
          id: Date.now(),
          task: text,
          completed: false,
        },
      ]);
      setText('');
      console.log(todos);
    }
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    } //If there is stored todos then fetch and setTodos
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDelete = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <AddTodo
        handleSubmit={handleSubmit}
        text={text}
        handleTextChange={handleTextChange}
      />

      <h3 className="mb-3 text-2xl font-semibold text-center">Task</h3>
      {todos.map(
        (todo) =>
          !todo.completed && (
            <SingleTodo
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleToggleComplete={handleToggleComplete}
            />
          )
      )}
      <h3 className="mt-5 mb-3 text-2xl font-semibold text-center">
        Completed
      </h3>
      {todos.map(
        (todo) =>
          todo.completed && (
            <SingleTodo
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleToggleComplete={handleToggleComplete}
              className="first-letter:uppercase"
            />
          )
      )}
    </div>
  );
};

export default Todo;
