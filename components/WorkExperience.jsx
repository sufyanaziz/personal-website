import React from 'react';
import Title from './Title';

const WorkExperience = ({ t, data, id }) => {
  return (
    <div id={id} className="experience-container py-5 px-8 md:px-12">
      <Title name={t('experience')} />
      <div className="main">
        {data.map((experience) => {
          const outDate =
            experience.outDate === 'NaN' ? 'now' : experience.outDate;
          return (
            <div
              key={experience.keyword}
              className="main-container block md:flex"
            >
              <div className="title mb-2 md:mb-0">
                <p className="font-bold text-lg">{experience.name}</p>
                <p>
                  {experience.dateOfEntry} - {outDate}
                </p>
              </div>
              <div className="info mb-3 md:mb-0">
                <p className="font-bold text-lg">{experience.job}</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t(experience.keyword),
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
