import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import Typewriter from 'typewriter-effect';

const Interface = ({ t, id }) => {
  return (
    <div
      id={id}
      className="interface-container flex-col flex items-center justify-center"
    >
      <div className="mb-8">
        <p className="text-3xl md:text-4xl">{t('hi')}</p>
      </div>
      <div className="mb-8">
        <p className="text-3xl md:text-5xl font-bold">Achmad Sufyan Aziz</p>
      </div>
      <div className="text-job">
        <div className="text-xl md:text-2xl flex">
          <p>{t('im-a')}</p>
          <Typewriter
            options={{
              strings: ['Frontend Developer.', 'Backend Developer.', 'Gamer.'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="icons flex mt-6">
        <a href="https://github.com/sufyanaziz" target="_blank">
          <AiFillGithub className="mr-2 icon" fontSize={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/achmad-sufyan-aziz-b63603185/"
          target="_blank"
        >
          <AiFillLinkedin className="mr-2 icon" fontSize={28} />
        </a>
      </div>
    </div>
  );
};

export default Interface;
