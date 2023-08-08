import React from 'react';
import { IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';

const ComingSoon = ({ title, desc }) => {
  return (
    <div className="min-h-[calc(100vh-67px)] flex justify-center items-center flex-col">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p>{desc}</p>
      <div className="mt-3 text-center">
        <p>Follow for updates</p>
        <div className="mt-1">
          <a
            href="https://github.com/vikrammahto/tototimer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-2 rounded-full me-3 hover:bg-[#333] hover:text-white"
          >
            <IconBrandGithub className="inline-block" />
          </a>
          <a
            href="https://twitter.com/here_vikram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-2 rounded-full hover:bg-[#1DA1F2] hover:text-white"
          >
            <IconBrandTwitter className="inline-block" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
