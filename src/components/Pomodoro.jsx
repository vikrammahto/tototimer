import React, { useState, useEffect } from 'react';
import {
  IconRotateClockwise,
  IconWindowMaximize,
  IconWindowMinimize,
} from '@tabler/icons-react';
import PomodoroModal from './PomodoroModal';

const Pomodoro = () => {
  const [timer, setTimer] = useState(1500);
  const [isActive, setIsActive] = useState(false);
  const [breakType, setBreakType] = useState('pomodoro');
  const [open, setOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const startPauseTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    setTimer(
      breakType === 'pomodoro' ? 1500 : breakType === 'short_break' ? 300 : 900
    );
    setIsActive(false);
  };

  useEffect(() => {
    setTimer(
      breakType === 'pomodoro' ? 1500 : breakType === 'short_break' ? 300 : 900
    );
  }, [breakType]);

  useEffect(() => {
    let interval;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsActive(false);
      setOpen(true);
    }
    return () => clearInterval(interval);
  }, [isActive, timer, breakType]);

  const toggleFullScreen = () => {
    if (!isFullscreen) {
      const element = document.querySelector('#pomodoro-container');
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        /* Safari */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        /* IE11 */
        element.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen);
  };

  const checkboxStyle =
    'px-3 py-1 rounded-full border-2 border-white cursor-pointer focus:outline-none hover:bg-gray-50  peer-checked:bg-white text-white peer-checked:text-gray-700 hover:text-gray-700';
  return (
    <div
      id="pomodoro-container"
      className="overflow-y-hidden bg-cover bg-pomodoro"
    >
      <div className="relative w-full h-full backdrop-brightness-75 bg-slate-900/30">
        {isFullscreen ? (
          <IconWindowMinimize
            onClick={toggleFullScreen}
            className="absolute bottom-0 right-0 m-10 text-white cursor-pointer"
          />
        ) : (
          <IconWindowMaximize
            onClick={toggleFullScreen}
            className="absolute bottom-0 right-0 m-10 text-white cursor-pointer"
          />
        )}
        <div className="flex flex-col items-center justify-center h-[calc(100vh-67px)]">
          <ul className="flex max-w-md mx-auto">
            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="pomodoro"
                name="timer"
                id="pomodoro"
                checked={breakType === 'pomodoro'}
                onChange={(e) => setBreakType(e.target.value)}
              />
              <label className={checkboxStyle} htmlFor="pomodoro">
                Pomodoro
              </label>
            </li>
            <li className="relative mx-3">
              <input
                className="sr-only peer"
                type="radio"
                value="short_break"
                name="timer"
                id="short_break"
                checked={breakType === 'short_break'}
                onChange={(e) => setBreakType(e.target.value)}
              />
              <label className={checkboxStyle} htmlFor="short_break">
                Short break
              </label>
            </li>
            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="long_break"
                name="timer"
                id="long_break"
                checked={breakType === 'long_break'}
                onChange={(e) => setBreakType(e.target.value)}
              />
              <label className={checkboxStyle} htmlFor="long_break">
                Long break
              </label>
            </li>
          </ul>
          <h2 className="my-5 font-extrabold text-white text-7xl">
            {formatTime(timer)}
          </h2>
          <div className="flex">
            <button
              onClick={startPauseTimer}
              className="px-10 py-2 bg-white rounded-full"
            >
              {isActive ? 'Pause' : 'Start'}
            </button>
            <button className="mx-3 text-white" onClick={resetTimer}>
              <span className="sr-only">Reset timer</span>
              <IconRotateClockwise size={34} />
            </button>
          </div>
        </div>
        <PomodoroModal
          open={open}
          setOpen={setOpen}
          setTimer={setTimer}
          setBreakType={setBreakType}
        />
      </div>
    </div>
  );
};

export default Pomodoro;
