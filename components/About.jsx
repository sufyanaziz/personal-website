import React from 'react';
import Image from 'next/image';

import Container from './Container';
import MyPhoto from '../images/my-photo.png';
import { AiOutlineDownload } from 'react-icons/ai';

const About = ({ t, id }) => {
  return (
    <Container id={id}>
      <div className="mb-10 text-center">
        <p className="text-3xl md:text-4xl font-bold">{t('about')}</p>
      </div>
      <div className="about-container flex-row lg:flex items-center">
        <div className="image-container mb-12 lg:mr-16 lg:mb-0 items-center justify-center flex">
          <div className="image w-72 h-72 flex items-center justify-center">
            <Image objectFit="contain" src={MyPhoto} className="img" />
          </div>
        </div>
        <div className="main">
          <div className="mb-10">
            <p className="text-lg md:text-xl leading-relaxed">{t('intro')}</p>
          </div>
          <div className="float-left">
            <button className="button-action">
              <AiOutlineDownload /> <span>{t('download')} Resume</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
