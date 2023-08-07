import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const AddTodo = () => {
  const { text, handleTextChange, handleSubmit } = useContext(TodoContext);
  return (
    <form className="flex flex-col mb-3" onSubmit={handleSubmit}>
      <div class="relative border border-gray-300 rounded-lg">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          class="h-14 w-100 rounded-lg pl-3 z-0 focus:outline-none border-none focus:ring-0"
          placeholder="Eg: Prepare weekly schedule"
        />
        <div class="absolute top-2 right-2">
          <button
            type="submit"
            class="h-10 w-20 text-white rounded-lg bg-sky-500 hover:bg-sky-700 focus:bg-sky-500 focus:rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
