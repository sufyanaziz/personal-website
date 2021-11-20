import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaLink } from 'react-icons/fa';
import {
  SiSass,
  SiJavascript,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si';

import { GrMysql } from 'react-icons/gr';

import SIPESAT from './images/si_pesat_login.png';
import HEALTHYLENIAL from './images/healthylenial.png';
import FOODIE from './images/foodie-home.jpg';
import DOCPRO from './images/docpro_login.png';

const SKILL_DATA = [
  { name: 'HTML', icon: AiFillHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'SASS', icon: SiSass },
  { name: 'Javascript', icon: SiJavascript },
  { name: 'Typescript', icon: SiTypescript },
  { name: 'React.js', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'MySQL', icon: GrMysql },
  { name: 'GIT', icon: FaGitAlt },
  { name: 'Visual Studio Code', icon: SiVisualstudiocode },
];

const PROJECT_DATA = [
  {
    title: 'SI PESAT.',
    text: ' Create Website for sistem pengajuan surat',
    progLang: ['React.js', 'Node.js', 'SQL'],
    image: SIPESAT,
    link: [],
    status: 'done',
    name: 'sipesat',
  },
  {
    title: 'DOCPRO.',
    text: 'Create a few features on the website docpro. <br/> Create API for the website docpro.',
    progLang: ['React.js', 'Node.js', 'My SQL'],
    image: DOCPRO,
    link: [
      {
        name: 'website',
        icon: FaLink,
        to: 'https://docpro-app.herokuapp.com/login',
      },
    ],
    status: 'done',
    name: 'docpro',
  },
  {
    title: 'HealthyLenial.',
    text: ' Create Website for college assignments',
    progLang: ['React.js', 'Node.js', 'My SQL'],
    image: HEALTHYLENIAL,
    link: [
      {
        name: 'github',
        icon: AiFillGithub,
        to: 'https://github.com/sufyanaziz/e-healthylenial',
      },
      {
        name: 'website',
        icon: FaLink,
        to: 'https://app-healthylenial.herokuapp.com/',
      },
    ],
    status: 'done',
    name: 'healthylenial',
  },
  {
    title: 'Foodie.',
    text: ' Create Website for college assignments',
    progLang: ['React.js', 'Node.js', 'Firebase'],
    image: FOODIE,
    link: [
      {
        name: 'github',
        icon: AiFillGithub,
        to: 'https://github.com/sufyanaziz/project-web-kuliner-offline',
      },
    ],
    status: 'done',
    name: 'foodie',
  },
];

export { SKILL_DATA, PROJECT_DATA };
