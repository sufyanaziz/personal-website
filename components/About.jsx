import React from 'react';
import Image from 'next/image';

import Container from './Container';
// import MyPhoto from '/images/my-photo.png';
import { AiOutlineDownload } from 'react-icons/ai';

import Title from './Title';

const About = ({ t, id }) => {
  return (
    <Container id={id}>
      <Title name={t('about')} />
      <div className="about-container flex-row lg:flex items-center">
        <div className="image-container mb-12 lg:mr-16 lg:mb-0 items-center justify-center flex">
          <div className="relative image w-72 h-72 flex items-center justify-center">
            <Image
              placeholder="blur"
              blurDataURL="/images/my-photo.png"
              objectFit="cover"
              src="/images/my-photo.png"
              className="img"
              layout="fill"
            />
          </div>
        </div>
        <div className="main">
          <div className="mb-10">
            <p className="text-lg md:text-xl text-justify">{t('intro')}</p>
          </div>
          <div className="float-left">
            <button
              className="button-action"
              onClick={() =>
                window.open(
                  '/Achmad Sufyan Aziz - Front End Engineer - Resume.pdf'
                )
              }
            >
              <AiOutlineDownload /> <span>{t('download')} Resume</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
