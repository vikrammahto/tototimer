import { createContext, useState, useEffect } from 'react';

const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    } //If there is stored todos then fetch and setTodos
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

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
  return (
    <TodoContext.Provider
      value={{
        text,
        handleTextChange,
        handleSubmit,
        todos,
        handleDelete,
        handleToggleComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
