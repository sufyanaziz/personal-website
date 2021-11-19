import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// components ------------------------------------
import Navbar from '../components/Navbar';
import Interface from '../components/Interface';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = (props) => {
  const { t } = useTranslation('common');
  const [activeSection, setActiveSection] = useState(t('nav-home'));
  const [activeEn, setActiveEn] = useState('');
  const [activeId, setActiveId] = useState('');
  const [locale, setLocale] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.locale === 'en') {
      setActiveEn('active');
      setLocale('en');
    }
    if (router.locale === 'id') {
      setActiveId('active');
      setLocale('id');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Achmad Sufyan Aziz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        t={t}
        locale={locale}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        activeEn={activeEn}
        activeId={activeId}
      />
      <Interface t={t} id="home" />
      <About t={t} id="about" />
      <Skills t={t} id="skills" />
      <Projects t={t} id="projects" />
      <Footer t={t} />
    </div>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
