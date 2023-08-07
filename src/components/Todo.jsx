import React, { useContext } from 'react';
import AddTodo from './AddTodo';
import SingleTodo from './SingleTodo';
import TodoContext from '../context/TodoContext';
import NoTask from './NoTask';
import ZeroCompleted from './ZeroCompleted';

const Todo = () => {
  const { todos } = useContext(TodoContext);
  const completedTodos = todos.filter((todo) => todo.completed);
  const notCompletedTodos = todos.filter((todo) => !todo.completed);
  return (
    <div>
      <AddTodo />
      <h3 className="mt-5 mb-3 text-2xl font-medium text-center ">Task</h3>
      {notCompletedTodos.length === 0 ? (
        <NoTask />
      ) : (
        notCompletedTodos.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))
      )}
      <h3 className="mt-5 mb-3 text-2xl font-medium text-center">Completed</h3>
      {completedTodos.length === 0 ? (
        <ZeroCompleted />
      ) : (
        completedTodos.map((todo) => <SingleTodo key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default Todo;
