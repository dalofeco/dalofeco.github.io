/* eslint-disable max-len */
export interface WorkExperienceType {
  id: string;
  company: string;
  company_url?: string;
  role: string;
  project: string;
  start_date: string;
  end_date: string;
  summary: string;
  responsabilities: string[];
  technologies: string[];
}

const WorkExperiences: WorkExperienceType[] = [
  {
    id: 'lpsearch',
    company: 'Logistics Plus',
    company_url: 'https://logisticsplus.net',
    role: 'Remote Lead Full Stack Developer',
    project: 'LPSearch',
    start_date: 'April 2019',
    end_date: 'Current',
    summary:
      'Designed an internal system capable of organizing company personnel and capabilities, making them retrievable through full-text search queries in a Google-like fashion.',
    responsabilities: [
      'Work iteratively with client to design and develop a corporate search engine solution for a 250M+ yearly revenue company with 500+ employees and a flat organizational hierarchy',
      'Streamlined the process of discovering internal company capabilities and personnel with a Google-like search experience by consulting with client for their needs and expectations in an Agile workflow',
      'Integrated with Elasticsearch indexing for high performance and millisecond full-text query retrievals',
      'Used TS + React.js + Apollo GraphQL to build a maintainable and extensible UI with an intuitive UX',
      'Powerful TS + Node.js backend assures proper continuous data indexing and data quality assurance.',
      'Single-handedly design, develop, test, and orchestrate the production stack’s deployment via Docker.',
    ],
    technologies: ['ElasticSearch', 'Typescript', 'Node.js', 'React', 'GraphQL', 'Docker'],
  },
  {
    id: 'mocha',
    company: 'MochaWallet',
    company_url: 'https://mochawallet.com',
    role: 'Full Stack Developer',
    project: 'Mocha Wallet',
    start_date: 'Oct 2019',
    end_date: 'Feb 2020 (Pending)',
    summary:
      'Developed a full-stack prototype platform aimed at assisting mobile users to achieve financial freedom from debt.',
    responsabilities: [
      'Designed and developed full-stack MVP with critical functionality to demonstrate to stakeholders.',
      'Architected multi-service system coordination to provide easy to use financial assistance to clients.',
      'Integrated data accessibility, integrity, and security into infrastructure and application designs',
      'Coordinate with banking APIs to provide seamless banking via the MochaWallet mobile app',
    ],
    technologies: ['Node.js', 'Typescript', 'React Native', 'Google Cloud'],
  },
];

export default WorkExperiences;
