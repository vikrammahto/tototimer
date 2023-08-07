import React from 'react';

const NoTask = () => {
  return (
    <div className="flex flex-col flex-wrap content-center justify-center h-64 px-20 text-center w-100 bg-gray-50">
      <div className="text-center">
        <svg
          className="inline-block w-20 h-20 text-gray-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
      </div>
      <h3 className="text-gray-400">You don't have any tasks today.</h3>
    </div>
  );
};

export default NoTask;
