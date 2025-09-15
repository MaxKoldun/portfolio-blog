import { Project } from '@/features/home/types';
export const projects: Project[] = [
  {
    id: 1,
    image: '/projects/safegard.png',
    translations: {
      en: {
        name: 'SafeGard Travel Medicine',
        description:
          'I developed a Medical travel form for US citizens. The medical form contains 4 different steps and a key feature that it is rendered by schema from js object. So updating form does not require changing UI components. All updates can be made through the schema. Also a difficult task was adding different external services.',
        technologies:
          'Next js (App Router), React.js, Redux, i18next, Material UI, Zendesk, Persona, Healthie',
        responsibilies:
          'Estimation, Development from scratch, Code Review, CI/CD Setup, Communication with Clients',
        keyFeatures:
          'Rendering forms by Schema, RnD phase, Integration of many services (Persona, Zendesk, Helthie, Authorize.net)',
      },
      ua: {
        name: 'SafeGard Travel Medicine',
        description:
          'I developed a Medical travel form for US citizens. The medical form contains 4 different steps and a key feature that it is rendered by schema from js object. So updating form does not require changing UI components. All updates can be made through the schema. Also a difficult task was adding different external services.',
        technologies:
          'Next js (App Router), React.js, Redux, i18next, Material UI, Zendesk, Persona, Healthie',
        responsibilies:
          'Estimation, Development from scratch, Code Review, CI/CD Setup, Communication with Clients',
        keyFeatures:
          'Rendering forms by Schema, RnD phase, Integration of many services (Persona, Zendesk, Helthie, Authorize.net)',
      },
    },
    liveLink: 'https://patient.sgtravelmed.com/login',
  },
  {
    id: 2,
    image: undefined,
    video:
      'https://player.vimeo.com/video/933636296?autoplay=1&controls=0&loop=1&background=1&app_id=122963',
    translations: {
      en: {
        name: 'Graberly - Review Management System',
        description: 'Graberly provides a user with tools to collect more reviews, such as personalised QR codes and links as well as software that makes it easier to collect reviews. The project was developed by other devs but it had poor performance and many bugs. I fixed main issues and added new features like payment via Stripe.',
        technologies:
          'Next js (pages Router), React.js, Redux, Stripe, i18next, Antd',
        responsibilies: 'Optimization, Bug Fixing, Estimation, CI/CD Setup',
        keyFeatures:
          'Project Optimization, Removal redundant Next.js code, Fix state (global + local) and API management',
      },
      ua: {
        name: 'SafeGard Travel Medicine',
        description: 'Graberly provides a user with tools to collect more reviews, such as personalised QR codes and links as well as software that makes it easier to collect reviews. The project was developed by other devs but it had poor performance and many bugs. I fixed main issues and added new features like payment via Stripe.',
        technologies:
          'Next js (App Router), React.js, Redux, i18next, Material UI, Zendesk, Persona, Healthie',
        responsibilies:
          'Estimation, Development from scratch, Code Review, CI/CD Setup, Communication with Clients',
        keyFeatures:
          'RnD, Integration of many services (Persona, Zendesk, Helthie, Authorize.net)',
      },
    },
    liveLink: 'https://app.graberly.com/register',
  },
  {
    id: 3,
    image: '/projects/fdareports.png',
    translations: {
      en: {
        name: 'FDA Reports',
        description: 'The project is an online service that helps a user to collect information about newly released drugs and shows a list of user contacts (from Linkedin) that can be interested in the released drugs. I selected the project because I was a mentor here for another dev and received a very positive feedback from my mentee after a release.',
        technologies:
          'React, Material UI, Redux-toolkit, i18next, React-query, Docker',
        responsibilies:
          'Estimation, Development from scratch, Code Review, CI/CD Setup',
        keyFeatures: 'Mentoring a Junior Developer',
      },
      ua: {
        name: 'SafeGard Travel Medicine',
        description: 'The project is an online service that helps a user to collect information about newly released drugs and shows a list of user contacts (from Linkedin) that can be interested in the released drugs. I selected the project because I was a mentor here for another dev and received a very positive feedback from my mentee after a release.',
        technologies:
          'Next js (App Router), React.js, Redux, i18next, Material UI, Zendesk, Persona, Healthie',
        responsibilies:
          'Estimation, Development from scratch, Code Review, CI/CD Setup, Communication with Clients',
        keyFeatures:
          'RnD, Integration of many services (Persona, Zendesk, Helthie, Authorize.net)',
      },
    },
    liveLink: 'https://spider.modelate.de/product-selection',
  },
  {
    id: 4,
    image: '/projects/restaurantapp.png',
    translations: {
      en: {
        name: 'NDA Restaurant App',
        description: 'The project is an online vegetarian restaurant where users can order food and admins can update information about dishes through the admin panel. I selected the project because I worked here as a FullStack developer also I implemented many cool features like PWA with caching info, SSR, Google Analytics and a custom wysiwyg editor.',
        technologies:
          'Next.js (pages router), i18next, Tailwindcss, Redux-toolkit, Docker, wysiwyg',
        responsibilies:
          'Estimation, Development from scratch, Code Review, CI/CD Setup, Google Analytics Setup, Communication with Clients',
        keyFeatures:
          'Full Stack development, SSR, Caching via Service Worker and react-query, OutStanding Speed of Development',
      },
      ua: {
        name: 'SafeGard Travel Medicine',
        description: 'The project is an online vegetarian restaurant where users can order food and admins can update information about dishes through the admin panel. I selected the project because I worked here as a FullStack developer also I implemented many cool features like PWA with caching info, SSR, Google Analytics and a custom wysiwyg editor.',
        technologies:
          'Next js (App Router), React.js, Redux, i18next, Material UI, Zendesk, Persona, Healthie',
        responsibilies:
          'Estimation, Development from scratch, Code Review, CI/CD Setup, Communication with Clients',
        keyFeatures:
          'RnD, Integration of many services (Persona, Zendesk, Helthie, Authorize.net)',
      },
    },
    liveLink: undefined,
  },
];
