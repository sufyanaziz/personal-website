import React from 'react';

import Container from './Container';
import Title from './Title';

import { SKILL_DATA } from '../constant';

const Skills = ({ t, id }) => {
  return (
    <Container id={id}>
      <Title name={t('skills')} />
      <div className="skills grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
        {SKILL_DATA.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.name} className="card-skill text-center">
              <div className="text-center flex justify-center">
                <Icon className="card-icon mb-5 text-3xl md:text-4xl" />
              </div>
              <div className="text-sm md:text-base font-bold">
                <span>{skill.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skills;
