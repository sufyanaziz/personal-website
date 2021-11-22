import React from 'react';

import {
  AiFillMail,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

const Footer = ({ t }) => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container px-6 lg:px-28 md:px-10 mb-10 text-center">
      <div className="block lg:flex">
        <div className="footer-left mb-8 lg:mr-auto lg:mb-0">
          <p className="text-sm md:text-base text-center lg:text-left">
            {t('contact-me')}
          </p>
          <div className="icons mt-2 flex justify-center lg:justify-start">
            <a
              className="mr-2"
              href="https://www.instagram.com/ahmadsufyan_/"
              target="_blank"
            >
              <AiFillInstagram className="icon" fontSize={22} />
            </a>
            <a
              className="mr-2"
              href="https://www.facebook.com/A.SufyanAz/"
              target="_blank"
            >
              <AiFillFacebook className="icon" fontSize={22} />
            </a>
            <a
              className="mr-2"
              href="https://twitter.com/sufyanAziz98"
              target="_blank"
            >
              <AiFillTwitterSquare className="icon" fontSize={22} />
            </a>
            <a className="mr-2" href="mailto:achmadsufyan98@gmail.com">
              <AiFillMail className="icon" fontSize={22} />
            </a>
            <a href="https://wa.me/+6285211181046" target="_blank">
              <AiOutlineWhatsApp className="icon" fontSize={22} />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <p className="text-xs md:text-base">
            {t('author')} <span className="name">{t('my-name')}</span> | &copy;{' '}
            {year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
