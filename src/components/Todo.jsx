import React, { useContext } from 'react';
import AddTodo from './AddTodo';
import SingleTodo from './SingleTodo';
import TodoContext from '../context/TodoContext';

const Todo = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <AddTodo />
      <h3 className="mt-5 mb-3 text-2xl font-medium text-center ">Task</h3>
      {todos.map(
        (todo) => !todo.completed && <SingleTodo key={todo.id} todo={todo} />
      )}
      <h3 className="mt-5 mb-3 text-2xl font-medium text-center">Completed</h3>
      {todos.map(
        (todo) => todo.completed && <SingleTodo key={todo.id} todo={todo} />
      )}
    </div>
  );
};

export default Todo;
