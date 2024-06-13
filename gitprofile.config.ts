// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'VasilisPat',
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['VasilisPat/vasilispat.github.io'], // These projects will not be displayed.
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display.
      },
    },
    external: {
      header: 'My Side Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [ {
        title: 'Aerial Screensaver for Windows',
        description:
          'Aerial is a Windows screen saver that mimics Apple\'s Apple TV screensaver functionality. I am responsible for code cleanup, testing pre-releases and compiling the documentation of the project.',
        imageUrl:
          '/src/assets/aerial-icon.png',
        link: 'https://github.com/OrangeJedi/Aerial',
      },],
    },
  },
  seo: {
    title: 'Portfolio of Vasilis Patelis',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'vasilis-patelis',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'vasileiospat@hotmail.com',
  },
  resume: {
    fileUrl: '/src/assets/CV_EN.pdf',
  },
  skills: [
    'C',
    'C++',
    'Java SDK',
    'Unix Bash',
    'MySQL',
    'MariaDB',
    'Docker',
  ],
  experiences: [
    {
      company: 'South Cross Shipping & Trading Greece Co. Ltd',
      position: 'IT Consultant',
      from: 'November 2018',
      to: 'September 2020',
      companyLink: '',
    },
    {
      company: 'RadioHellenic S.A.',
      position: 'IT Support Technician',
      from: 'June 2019',
      to: 'September 2019',
      companyLink: '',
    },
  ],
  certifications: [
    
  ],
  educations: [
    {
      institution: 'University of West Attica - Department of Informatics and Computer Engineering',
      degree: 'Informatics and Computer Engineer, Integrated Master',
      from: '2018',
      to: 'Present',
    },
    {
      institution: 'Greek-French High School of Piraeus “Saint-Paul”',
      degree: 'High School Diploma',
      from: '2015',
      to: '2018',
    },
  ],
  publications: [
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'corporate',
    ],
  },

  enablePWA: true,
}

export default CONFIG;