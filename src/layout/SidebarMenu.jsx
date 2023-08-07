import React from 'react';
import {
  IconChecklist,
  IconClockPlay,
  IconSunHigh,
  IconPin,
  IconWallet,
} from '@tabler/icons-react';

const commonClass =
  'transform hover:scale-105 focus:scale-105 duration-100 p-2 m-2 flex shadow-xl shadow-slate-100 flex-col md:inline-block rounded-lg text-center';

const SidebarMenu = () => {
  return (
    <aside className="fixed bottom-0 z-50 flex flex-row justify-center w-full p-2 mx-auto bg-white border-t border-r md:border-t-0 md:static md:justify-start px-auto md:flex-col md:w-20">
      <a aria-current="page" className="active" href="/">
        <div
          className={`bg-violet-300 hover:bg-violet-400 ${commonClass} md:mt-0`}
        >
          <IconChecklist />
        </div>
      </a>
      <a href="/notes">
        <div className={`bg-amber-300 hover:bg-amber-400 ${commonClass}`}>
          <IconPin />
        </div>
      </a>
      <a href="/weather">
        <div className={`bg-sky-300 hover:bg-sky-400 ${commonClass}`}>
          <IconSunHigh />
        </div>
      </a>
      <a href="/finance">
        <div className={`bg-lime-300 hover:bg-lime-400 ${commonClass}`}>
          <IconWallet />
        </div>
      </a>
      <a href="/pomodoro">
        <div className={`bg-rose-300 hover:bg-rose-400 ${commonClass}`}>
          <IconClockPlay />
        </div>
      </a>
    </aside>
  );
};

export default SidebarMenu;
