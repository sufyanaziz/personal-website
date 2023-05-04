const CREDENTIALS = {
  name: 'Achmad Sufyan Aziz',
  dob: '9/11/1998',
  phone: '+6285211181046',
};

const SKILL_DATA = [
  { name: 'HTML', code: 'html' },
  { name: 'CSS', code: 'css' },
  { name: 'SASS', code: 'scss' },
  { name: 'Javascript', code: 'js' },
  { name: 'Typescript', code: 'ts' },
  { name: 'React.js', code: 'react.js' },
  { name: 'Node.js', code: 'node.js' },
  { name: 'MySQL', code: 'mysql' },
  { name: 'GIT', code: 'git' },
  { name: 'Visual Studio Code', code: 'vscode' },
];

const PROJECT_DATA = [
  {
    title: 'Simple Calculator.',
    text: 'Create simple calculator using react, typescript, dan redux',
    progLang: ['React.js', 'Typescript', 'Redux'],
    image: '/images/simple_calculator.png',
    link: [
      {
        name: 'github',
        to: 'https://github.com/sufyanaziz/calculator',
      },
      {
        name: 'website',
        to: 'https://asa-calculator.herokuapp.com/',
      },
    ],
    status: 'done',
    name: 'simple_calculator',
  },
  {
    title: 'SI PESAT.',
    text: 'Create Website for sistem pengajuan surat',
    progLang: ['React.js', 'Node.js', 'SQL'],
    image: '/images/si_pesat_login.png',
    link: [],
    status: 'done',
    name: 'sipesat',
  },
  {
    title: 'DOCPRO.',
    text: 'Create a few features on the website docpro. <br/> Create API for the website docpro.',
    progLang: ['React.js', 'Node.js', 'My SQL'],
    image: '/images/docpro_login.png',
    link: [
      {
        name: 'website',
        to: 'https://docpro-app.herokuapp.com/login',
      },
    ],
    status: 'done',
    name: 'docpro',
  },
  {
    title: 'HealthyLenial.',
    text: 'Create Website for college assignments',
    progLang: ['React.js', 'Node.js', 'My SQL'],
    image: '/images/healthylenial.png',
    link: [
      {
        name: 'github',
        to: 'https://github.com/sufyanaziz/e-healthylenial',
      },
      {
        name: 'website',
        to: 'https://app-healthylenial.herokuapp.com/',
      },
    ],
    status: 'done',
    name: 'healthylenial',
  },
  {
    title: 'Foodie.',
    text: 'Create Website for college assignments',
    progLang: ['React.js', 'Node.js', 'Firebase'],
    image: '/images/foodie-home.jpg',
    link: [
      {
        name: 'github',
        to: 'https://github.com/sufyanaziz/project-web-kuliner-offline',
      },
    ],
    status: 'done',
    name: 'foodie',
  },
];

const SOCIAL_MEDIA = [
  {
    name: 'instagram',
    link: 'https://www.instagram.com/ahmadsufyan_/',
    target: '__blank',
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/A.SufyanAz/',
    target: '__blank',
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/sufyanAziz98',
    target: '__blank',
  },
  {
    name: 'mail',
    link: 'mailto:achmadsufyan98@gmail.com',
    target: '__blank',
  },
  {
    name: 'whatsapp',
    link: 'https://wa.me/+6285211181046',
    target: '__blank',
  },
  {
    name: 'github',
    link: 'https://github.com/sufyanaziz',
    target: '__blank',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/achmad-sufyan-aziz-b63603185/',
    target: '__blank',
  },
];

const WORK_EXPERIENCE = [
  {
    name: 'Waresix',
    dateOfEntry: 'Mar 2022',
    outDate: 'NaN',
    job: 'Junior Front End Engineer',
    responsibility:
      'Front-end design, development and testing using React to build feature-rich and user-friendly web /mobile applications. <br/> Maintain and improve our high-quality in-house JavaScript libraries and toolsets, for example a complete React UI framework following our design guidelines. <br/> Develop, test and maintain responsive web/mobile apps with elegant UX that delight our users and raise their productivity.',
    keyword: 'we-waresix',
  },
  {
    name: 'Waresix',
    dateOfEntry: 'Nov 2021',
    outDate: 'Feb 2021',
    job: 'Intern Junior Front End Engineer',
    responsibility:
      'Front-end design, development and testing using React to build feature-rich and user-friendly web /mobile applications. <br/> Maintain and improve our high-quality in-house JavaScript libraries and toolsets, for example a complete React UI framework following our design guidelines. <br/> Develop, test and maintain responsive web/mobile apps with elegant UX that delight our users and raise their productivity.',
    keyword: 'we-waresix-intern',
  },
  {
    name: 'BPTI (UHAMKA)',
    dateOfEntry: 'Jan 2021',
    outDate: 'Sep 2021',
    job: 'Intern Web Developer',
    responsibility:
      '- Create Website si_pesat (mail submission system). <br/> - Develop, test and maintain website.',
    keyword: 'we-bpti',
  },
  {
    name: 'Freelancer',
    dateOfEntry: 'Jul 2020',
    outDate: 'Sep 2020',
    job: 'Web Developer',
    responsibility:
      '- Create API for website docpro (dentist appointment). <br/> - Create a few feature on the website.',
    keyword: 'we-docpro',
  },
];

const data = {
  credential: CREDENTIALS,
  workExperience: WORK_EXPERIENCE,
  skills: SKILL_DATA,
  projects: PROJECT_DATA,
  socialMedia: SOCIAL_MEDIA,
};

const constant = {
  SKILL_DATA,
  PROJECT_DATA,
  CREDENTIALS,
  SOCIAL_MEDIA,
  WORK_EXPERIENCE,
  ALLDATA: data,
};

export default constant;
