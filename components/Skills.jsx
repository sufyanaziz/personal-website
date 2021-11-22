import React from 'react';

import Container from './Container';
import Title from './Title';

import useIcon from '../hooks/useIcon';

const Skills = ({ t, id, data }) => {
  return (
    <Container id={id}>
      <Title name={t('skills')} />
      <div className="skills grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
        {data.map((skill) => {
          const Icon = useIcon(skill.code);
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
