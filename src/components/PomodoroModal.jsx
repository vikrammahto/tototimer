import React, { Fragment } from 'react';
import { IconHeartFilled } from '@tabler/icons-react';
import { Dialog, Transition } from '@headlessui/react';

const PomodoroModal = ({ open, setOpen, setTimer, setBreakType }) => {
  const cancelButtonRef = React.useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative overflow-hidden text-center transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                      <Dialog.Title as="h3" className="my-3 text-xl font-bold">
                        <span className="inline-block mb-2 text-4xl">🎉</span>{' '}
                        <br />
                        Woohoo! You have completed a focused session.
                      </Dialog.Title>
                      <p>
                        Take a short break, stretch your body, dring a glass of
                        water.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="justify-center px-4 py-3 sm:flex sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center px-3 py-2 mt-3 text-sm font-semibold text-white bg-red-600 rounded-full shadow-sm ring-1 ring-insetsm:mt-0 sm:w-auto sm:ms-3 hover:bg-red-500 ring-red-500"
                    onClick={() => {
                      setOpen(false);
                      setTimer(300);
                      setBreakType('short_break');
                    }}
                    ref={cancelButtonRef}
                  >
                    <IconHeartFilled size={18} className="me-1" /> Take a break
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-3 py-2 mt-3 text-sm font-semibold bg-white rounded-full shadow-sm ring-1 sm:w-auto sm:ms-3 hover:bg-gray-100 ring-gray-300"
                    onClick={() => {
                      setOpen(false);
                      setTimer(2);
                    }}
                    ref={cancelButtonRef}
                  >
                    💪 Start focused session
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PomodoroModal;
