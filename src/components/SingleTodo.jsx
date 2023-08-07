import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const SingleTodo = ({ todo }) => {
  const { id, task, completed } = todo;
  const { handleDelete, handleToggleComplete } = useContext(TodoContext);
  return (
    <div>
      <div
        className={`flex items-center px-3 py-2.5 mb-3 rounded justify-between ${
          !completed ? 'bg-green-50' : 'bg-rose-50'
        } group`}
      >
        <div className="flex items-center">
          <input
            type="checkbox"
            name=""
            id={id}
            checked={completed}
            onChange={() => handleToggleComplete(id)}
            className="w-4 h-4 border border-gray-300 rounded shadow-sm checked:bg-rose-300 me-3 focus:border-rose-300 focus:ring focus:ring-offset-0 focus:ring-rose-200 focus:ring-opacity-50 "
          />
          <h3 className={completed ? 'line-through' : ''}>{task}</h3>
        </div>
        <button
          onClick={() => handleDelete(id)}
          className="lg:hidden group-hover:inline-flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
