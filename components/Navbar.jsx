import React from 'react';

import Link from 'next/link';

import { GiHamburgerMenu } from 'react-icons/gi';
import useHandleScroll from '../hooks/useHandleScroll';

const Navbar = ({
  t,
  locale,
  activeSection,
  setActiveSection,
  activeEn,
  activeId,
}) => {
  const [openNavItem, setOpenNavItem] = React.useState(false);

  const { handleScroll } = useHandleScroll(setActiveSection, t);

  React.useEffect(() => {
    let isCancelled = false;
    window.addEventListener('scroll', () => {
      if (!isCancelled) {
        handleScroll();
      }
    });
    return async () => {
      isCancelled = true;
      window.removeEventListener('scroll', () => handleScroll());
    };
  }, []);

  const Item = () => (
    <React.Fragment>
      <NavItem
        name={t('nav-home')}
        active={activeSection}
        setActive={() => setActiveSection(t('nav-home'))}
        onClick={() => {
          const anchor = document.querySelector(`#home`);
          const yOffset = -120;
          const y =
            anchor.getBoundingClientRect().top + window.pageYOffset + yOffset;

          if (anchor === null) return;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }}
      />
      <NavItem
        name={t('nav-about')}
        active={activeSection}
        setActive={() => setActiveSection(t('nav-about'))}
        onClick={() => {
          const anchor = document.querySelector(`#about`);
          const yOffset = -120;
          const y =
            anchor.getBoundingClientRect().top + window.pageYOffset + yOffset;

          if (anchor === null) return;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }}
      />
      <NavItem
        name={t('nav-skills')}
        active={activeSection}
        setActive={() => setActiveSection(t('nav-skills'))}
        onClick={() => {
          const anchor = document.querySelector(`#skills`);
          const yOffset = -120;
          const y =
            anchor.getBoundingClientRect().top + window.pageYOffset + yOffset;

          if (anchor === null) return;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }}
      />
      <NavItem
        name={t('nav-projects')}
        active={activeSection}
        setActive={() => setActiveSection(t('nav-projects'))}
        onClick={() => {
          const anchor = document.querySelector(`#projects`);
          const yOffset = -120;
          const y =
            anchor.getBoundingClientRect().top + window.pageYOffset + yOffset;

          if (anchor === null) return;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }}
      />
    </React.Fragment>
  );

  return (
    <div className="nav-container sticky top-0 flex items-center px-6 lg:px-28 md:px-10 z-10">
      <div className="nav-header mr-auto">
        <p className="font-bold text-lg lg:text-2xl md:text-xl">
          Achmad Sufyan Aziz
        </p>
      </div>
      <div className="nav-items-container hidden md:flex">
        <div className="nav-items flex">{Item()}</div>
        <div className="btn-lang flex ml-4">
          <Link href="/" locale={locale === 'en' ? 'id' : 'en'}>
            <span className={`${activeEn}`}>EN</span>
          </Link>
          <Link href="/" locale={locale === 'id' ? 'en' : 'id'}>
            <span className={`${activeId}`}>ID</span>
          </Link>
        </div>
      </div>

      <div className="block md:hidden">
        <GiHamburgerMenu
          fontSize={28}
          onClick={() => setOpenNavItem(!openNavItem)}
          className="cursor-pointer"
        />
      </div>

      <div
        className={`nav-item-screen block md:hidden h-64 absolute px-8 ${
          openNavItem ? 'active' : 'non-active'
        }`}
      >
        {Item()}
        <div className="btn-lang flex" style={{ width: 115 }}>
          <Link href="/" locale={locale === 'en' ? 'id' : 'en'}>
            <span className={`${activeEn}`}>EN</span>
          </Link>
          <Link href="/" locale={locale === 'id' ? 'en' : 'id'}>
            <span className={`${activeId}`}>ID</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ name, active, setActive, onClick }) => {
  const activeSection = name === active ? 'active' : 'non-active';
  return (
    <p
      className={`nav-item mr-5 last:mr-0 ${activeSection}`}
      onClick={() => {
        setActive();
        onClick();
      }}
    >
      {name}
    </p>
  );
};

export default Navbar;
