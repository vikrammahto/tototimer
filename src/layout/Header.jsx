import React from 'react';

const Header = () => {
  function formatDateAndTime(date) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // Convert to 12-hour format and determine AM/PM
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    // Add leading zero for single-digit minutes
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return {
      date: `${month} ${day}, ${year}`,
      time: `${hours}:${formattedMinutes}${amPm}`,
    };
  }

  const currentDate = new Date();

  const { date, time } = formatDateAndTime(currentDate);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-3 bg-white border-b shadow-sm">
      <div className="flex items-center">
        <figure className="inline-flex p-2 rounded-full bg-sky-200 text-sky-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-checkbox"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 11l3 3l8 -8"></path>
            <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
          </svg>
        </figure>
        <h3 className="text-xl font-semibold ms-3">Hello! Vikram</h3>
      </div>
      <h6 className="text-sm">
        <span>{date}</span>{' '}
        <span className="hidden sm:inline-flex">{time}</span>
      </h6>
    </div>
  );
};

export default Header;
