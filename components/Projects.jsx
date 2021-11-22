import React from 'react';

import Image from 'next/image';
import Title from './Title';

import useIcon from '../hooks/useIcon';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1200, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const Projects = ({ t, id, data }) => {
  return (
    <div className="mb-12 px-6 lg:px-28 md:px-10 py-5" id={id}>
      <Title name={t('projects')} />
      <Carousel ssr itemClass="image-item" responsive={responsive}>
        {data.map((project, i) => {
          return (
            <div className="project-card" key={i}>
              <div className="project-image">
                <Image
                  placeholder="blur"
                  blurDataURL={project.image}
                  src={project.image}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="project-main">
                <div className="header mt-4 mb-5 h-16 flex flex-col">
                  <p className="text-2xl mb-2">{project.title}</p>
                  <small className={project.status}>{project.status}</small>
                </div>
                <div className="main mb-4 h-28">
                  <div dangerouslySetInnerHTML={{ __html: t(project.name) }} />
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
                        const Icon = useIcon(link.name);
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
        })}
      </Carousel>
    </div>
  );
};

export default Projects;
