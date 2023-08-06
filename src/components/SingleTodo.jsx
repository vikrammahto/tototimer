import React from 'react';

const SingleTodo = ({ todo, handleDelete, handleToggleComplete }) => {
  const { id, task, completed } = todo;

  return (
    <div>
      <div
        className={`flex items-center px-5 py-2.5 mb-3 rounded justify-between ${
          !completed ? 'bg-green-50' : 'bg-red-100'
        }`}
      >
        <div className="flex items-center">
          <input
            type="checkbox"
            name=""
            id={id}
            checked={completed}
            onChange={() => handleToggleComplete(id)}
            className="w-4 h-4 border border-gray-300 me-3"
          />
          <h3 className={completed ? 'line-through' : ''}>{task}</h3>
        </div>
        <button onClick={() => handleDelete(id)}>
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
