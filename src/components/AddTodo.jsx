import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const AddTodo = () => {
  const { text, handleTextChange, handleSubmit } = useContext(TodoContext);
  return (
    <form
      className="sticky top-0 flex flex-col px-3 py-3 mb-3 bg-white"
      onSubmit={handleSubmit}
    >
      <div className="relative bg-white border border-gray-300 rounded-lg">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          className="z-0 w-full pl-3 border-none rounded-lg h-14 focus:outline-none focus:ring-0"
          placeholder="Eg: Prepare weekly schedule"
        />
        <div className="absolute top-2 right-2">
          <button
            type="submit"
            className="w-20 h-10 text-white rounded-lg bg-sky-500 hover:bg-sky-700 focus:bg-sky-500 focus:rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
