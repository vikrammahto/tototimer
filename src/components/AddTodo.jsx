import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const AddTodo = () => {
  const { text, handleTextChange, handleSubmit } = useContext(TodoContext);
  return (
    <div>
      <form className="flex flex-col mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={text}
          onChange={handleTextChange}
          placeholder="Eg: Design wireframe, create schedule"
          className="border border-gray-300 px-5 py-2.5 rounded"
        />
        <button
          type="submit"
          className="text-white rounded bg-sky-500 px-5 py-2.5 mt-3 font-semibold"
        >
          Add task
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
