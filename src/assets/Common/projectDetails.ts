/**
 * Local fallback / seed data for the Experience section.
 *
 * Firebase Realtime Database schema (one node per language):
 *   /experience/{lang}  →  ProjectData  (lang = en | hi | de | es | fr | it | ja | ru)
 *
 * Edit content in Firebase Console — no code deploy needed.
 * Copy DEFAULT_EXPERIENCE_DATA into /experience/{lang} when seeding Firebase.
 */
import { ProjectData } from 'src/app/Component/technology/interfaces/project.interface';

export const DEFAULT_EXPERIENCE_DATA: ProjectData = {
  title: 'Professional Experience',
  subtitle: 'Organizations, roles, and project contributions across my career.',
  highlights: [
    'Angular & TypeScript development',
    'React.js',
    'Vue.js',
    'Component architecture & reusable UI libraries',
    'Code reviews & team mentoring',
    'Agile delivery & SDLC ownership',
    'Performance optimization & testing'
  ],
  company: [
    {
      companyName: 'Self Development',
      duration: 'Present',
      role: 'Student',
      image: 'https://img.magnific.com/free-vector/hand-drawn-neuroeducation-illustration_23-2150945405.jpg?semt=ais_hybrid&w=740&q=80',
      projects: [
        {
          projectName: 'Anand Shopify Store',
          technologiesUsed:
            'Vue 3, Javascript, Pinia - State Management, Bootstrap CSS',
          role: 'Senior Consultant',
          achievements: 'Vue 3 + Pinia + Firestore for Auth & Realtime data + Bootstrap CSS',
          responsibilities: [
            'Wrote code for a Shopify store using Vue 3 and Pinia for state management, implementing responsive design with Bootstrap CSS.',
            'Developed the core logic independently without boilerplate code or AI, while leveraging AI selectively for user experience design.'
          ],
          hostUrl: 'http://anand-shopify.vercel.app'
        },
        {
          projectName: 'To-Do Application',
          technologiesUsed: 'React 18, JavaScript, Material UI, Tailwind CSS, React Router',
          role: 'Frontend Developer',
          achievements: 'Built and deployed a responsive task-management application with interactive draggable tasks and a component-based React architecture.',
          responsibilities: [
            'Developed a responsive To-Do application using React with reusable functional components and React hooks.',
            'Used dynamic color generation to visually distinguish tasks and improve usability.',
            'Combined Tailwind CSS and Material UI to create a responsive and polished user interface.'
          ],
          hostUrl: 'https://to-do-ayush.vercel.app'
        },
        {
          projectName: 'YouTube React',
          technologiesUsed: 'React.js',
          role: 'Frontend Developer',
          responsibilities: ['React Learning Project'],
          hostUrl: 'https://anand-youtube.vercel.app'
        }
      ]
    },
    {
      companyName: 'Deloitte USI',
      duration: 'Apr 2023 - Present',
      role: 'Senior Consultant',
      image: 'https://assets.telegraphindia.com/telegraph/2023/May/1684655283_newdeloitte.jpg',
      projects: [
        {
          projectName: 'Project 1#',
          technologiesUsed:
            'Angular 21, TypeScript, RxJS, NgRx, SAP Composable Storefront, Angular Material, Angular CDK, Bootstrap, SCSS',
          role: 'Senior Consultant',
          responsibilities: [
            'Led front-end development for a multi-brand B2B e-commerce platform serving several regional storefronts on a headless commerce stack.'
          ]
        }
      ]
    },
    {
      companyName: 'Zycus Infotech',
      duration: 'Dec 2022 - Apr 2023',
      role: 'Associate Tech Lead',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0HWPg4DcvG7EpsqZqsclZLG7e7YQ2bKybR-GII8Gc8-mUIceu0gZ3owS_wVZpsSZlKs&usqp=CAU',
      projects: [
        {
          projectName: 'i-Console',
          technologiesUsed: 'Angular 11+, TypeScript, HTML5, CSS3, Bootstrap, Git, Bitbucket, Java',
          role: 'UI Developer',
          responsibilities: [
            'Designed and shipped new features across cross-functional agile teams.',
            'Maintained complex Angular applications with real-time REST API integrations.',
            'Conducted code reviews and enforced front-end quality standards.',
            'Resolved production defects and improved application stability.',
            'Participated in daily stand-ups and sprint planning ceremonies.'
          ]
        }
      ]
    },
    {
      companyName: 'EFI India Pvt Ltd',
      duration: 'Apr 2020 - Dec 2022',
      role: 'Software Engineer — UI',
      image: 'assets/efiLogo.jpeg',
      projects: [
        {
          projectName: 'Fiery Spot Pro',
          technologiesUsed: 'Angular 8–13, TypeScript, Electron, SCSS, Git, SVN, C++',
          role: 'Software Engineer — UI',
          responsibilities: [
            'Led UI/UX strategy and workflow design for color-management software.',
            'Served as UI lead and primary code reviewer for the front-end team.',
            'Upgraded the application from Angular 6 to Angular 13 and Electron 5 to 18.',
            'Improved application performance and delivered features on schedule.',
            'Managed build and release pipelines with Jasmine/Karma test coverage.'
          ],
          achievements: 'Angular 6 → 13 upgrade · Electron 5 → 18 migration'
        },
        {
          projectName: 'Fiery Verify',
          technologiesUsed: 'Angular.js, TypeScript, HTML5, CSS3, Git, SVN, C++',
          role: 'Software Engineer — UI',
          responsibilities: [
            'Enhanced application performance and resolved critical defects.',
            'Reviewed code and maintained front-end quality across releases.',
            'Tracked issues in JIRA and managed version control with SVN/Git.',
            'Wrote unit tests with Jasmine and Karma.'
          ]
        }
      ]
    },
    {
      companyName: 'Test Yantra (TYSS)',
      duration: 'Jun 2019 - Apr 2020',
      role: 'Associate Software Developer',
      image: 'https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg',
      summary: 'Built recruitment and e-learning platforms with Angular dashboards, chart integrations, and responsive layouts.',
      projects: [
        {
          projectName: 'Tyro Vet',
          technologiesUsed: 'Angular 6+, TypeScript, Node.js, MongoDB, Highcharts, Git',
          role: 'Software Engineer — UI',
          responsibilities: [
            'Designed UI/UX flows for a recruitment automation platform.',
            'Built admin dashboards with Highcharts and Google Charts.',
            'Delivered features on time and resolved priority defects.',
            'Collaborated on application enhancements and performance tuning.'
          ]
        },
        {
          projectName: 'SkillRary',
          technologiesUsed: 'HTML5, CSS3, JavaScript, Git',
          role: 'Associate Software Developer',
          responsibilities: [
            'Fixed high, medium, and low priority production issues.',
            'Supported team members on front-end implementation tasks.'
          ]
        }
      ]
    }
  ]
};
