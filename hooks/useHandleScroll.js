const useHandleScroll = (setActiveSection, t) => {
  const getOffset = (anchor, yOffset) => {
    return window.pageYOffset + anchor + yOffset;
  };

  const handleScroll = () => {
    const anchorHome = document.querySelector(`#home`);
    const anchorAbout = document.querySelector(`#about`);
    const anchorSkills = document.querySelector(`#skills`);
    const anchorProjects = document.querySelector(`#projects`);

    const scrollY = window.scrollY;
    const boundRectHome = getOffset(
      anchorHome.getBoundingClientRect().top,
      200
    );
    const boundRectAbout = getOffset(
      anchorAbout.getBoundingClientRect().top,
      200
    );
    const boundRectSkills = getOffset(
      anchorSkills.getBoundingClientRect().top,
      350
    );
    const boundRectProjects = getOffset(
      anchorProjects.getBoundingClientRect().top,
      500
    );

    if (scrollY < boundRectHome) {
      setActiveSection(t('nav-home'));
    } else if (scrollY < boundRectAbout) {
      setActiveSection(t('nav-about'));
    } else if (scrollY < boundRectSkills) {
      setActiveSection(t('nav-skills'));
    } else if (scrollY < boundRectProjects) {
      setActiveSection(t('nav-projects'));
    } else {
      setActiveSection('');
    }
  };

  return { handleScroll };
};

export default useHandleScroll;
