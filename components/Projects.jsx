import React from 'react';

import Image from 'next/image';

import { PROJECT_DATA } from '../constant';
import Carousel from './Carousel';
import Title from './Title';

import { useMediaQuery } from 'react-responsive';

const Projects = ({ t, id }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 640px)' });
  const isBiggerScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [maxItem, setMaxItem] = React.useState(3);

  React.useEffect(() => {
    if (isBiggerScreen) {
      setMaxItem(3);
    } else if (isBigScreen) {
      setMaxItem(2);
    } else {
      setMaxItem(1);
    }
  }, [isBigScreen, isBiggerScreen]);

  return (
    <div className="mb-12" id={id}>
      <Title name={t('projects')} />
      <Carousel
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        itemLen={PROJECT_DATA.length}
        maxItem={maxItem}
      >
        {PROJECT_DATA.slice(currentIndex, currentIndex + maxItem).map(
          (project, i) => {
            return (
              <div className="project-card" key={i}>
                <Image src={project.image} />
                <div className="project-main">
                  <div className="header mt-4 mb-5 h-16 flex flex-col">
                    <p className="text-2xl mb-2">{project.title}</p>
                    <small className={project.status}>{project.status}</small>
                  </div>
                  <div className="main mb-4 h-28">
                    <div
                      dangerouslySetInnerHTML={{ __html: t(project.name) }}
                    />
                  </div>
                  <div className="links h-20">
                    {project.progLang.map((lang, i) => {
                      return (
                        <React.Fragment key={i}>
                          <span className="mr-2 underline">{lang}</span>
                        </React.Fragment>
                      );
                    })}
                    <div className="flex items-center mt-5">
                      {project.link.length !== 0 &&
                        project.link.map((link, i) => {
                          const Icon = link.icon;
                          return (
                            <a
                              className="mr-2 last:mr-0"
                              href={link.to}
                              target="_blank"
                              key={i}
                            >
                              <Icon size={20} />
                            </a>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </Carousel>
      {/* <div className="flex">
        
      </div> */}
    </div>
  );
};

export default Projects;
