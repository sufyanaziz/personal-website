import React from 'react';

import Container from './Container';

import { SKILL_DATA } from '../constant';

const Skills = ({ t, id }) => {
  return (
    <Container id={id}>
      <div className="mb-10 text-center">
        <p className="text-3xl md:text-4xl font-bold">{t('skills')}</p>
      </div>
      <div className="skills grid grid-cols-2 lg:grid-cols-5 gap-6">
        {SKILL_DATA.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="card-skill flex flex-col items-center justify-center"
            >
              <Icon className="card-icon mb-5" size={40} />
              <span className="text-lg font-bold text-center">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skills;
