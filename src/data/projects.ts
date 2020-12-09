/* eslint-disable max-len */
export interface ProjectType {
  name: string;
  date: string;
  subtitle: string;
  summary: string;
  technologies: string[];
  id: string;
  github_url?: string;
  demo_url?: string;
}

const AllProjects: ProjectType[] = [
  {
    name: 'VideoClassifier',
    date: 'April 2018',
    subtitle: 'Live Video Classifier using TensorFlow',
    summary:
      "Utilized an LSTM over a CNN to create a model for live video classification. The CNN used was a retrained version of Google's Inception v3 for image classification. The model was retrained using 500+ hours of footage, and deployed on a multithreaded web platform for system usage and management.",
    technologies: ['Python', 'TensorFlow', 'LSTM', 'CNN', 'AI', 'Neural Networks', 'Tornado'],
    id: 'videoclassifier',
    github_url: 'https://github.com/dalofeco/videoclassifier',
  },
  {
    name: 'TensorExpert',
    date: 'September 2017',
    subtitle: 'Machine Learning Data Analysis Platform',
    summary:
      'An active 24/7 data harvesting pipeline accumulating ~300k metrics per minute feeds an efficient framework for experimental statistical modeling and testing.',
    technologies: ['Node.js', 'Typescript', 'Python', 'Numpy', 'TensorFlow', 'Docker'],
    id: 'tensorexpert',
    github_url: 'https://github.com/dalofeco/tensorexpert',
  },
  {
    name: 'ErieGarbage',
    date: 'December 2016',
    subtitle: 'Secure Garbage Service Web Application',
    summary:
      'Desgined, developed and deployed a web application with security and quality considerations. Risk analysis and mitigation techniques were employed to deliver a reliable system. The system was further tested by conducting penetration testing to assure data confidentiality and integrity and assure the absence of quality or security bugs.',
    technologies: ['PHP', 'Apache'],
    id: 'eriegarbage',
    github_url: 'https://github.com/dalofeco/eriegarbage',
  },
  {
    name: 'ATM.go',
    date: 'March 2017',
    subtitle: 'ATM System for Capital One',
    summary:
      'Developed an Android mobile application for users to generate ATM transactions to be phisically authenticated with a key or facial recognition at the physical ATM.',
    technologies: ['Android SDK for Java', 'Node.js with Express.js'],
    id: 'atmgo',
    github_url: '',
  },
  {
    name: 'EZ-Park',
    date: 'November 2017',
    subtitle: 'Smart Parking System for General Motors',
    summary:
      "Developed a smart parking application on GM's vehicle SDK that automated the process of routing users parking spots near destination, and automatically pays for parking.",
    technologies: ['Node.js', 'JavaScript for GM SDK'],
    id: 'ez-park',
    github_url: 'https://github.com/dalofeco/EZPark-Server',
  },
  {
    name: 'PACT',
    date: 'November 2016',
    subtitle: 'Pebble Activity Smart Watch Application',
    summary:
      'Ranked the potential for outdoor activies given weather and user preferences using IBM Watson services for user tailored sorting and natural voice recognition. Added Amazon Alexa integration to query system using AWS.',
    technologies: ['Node.js', 'Amazon Web Services', 'IBM Watson'],
    id: 'pact',
    github_url: 'https://github.com/dalofeco/PACT-Server',
  },
  {
    name: 'Slide Master',
    date: 'May 2016',
    subtitle: 'Slide Player Web Application',
    summary:
      'Slide Master is a web slide player that reads lecture slides from a JSON file. It is mainly composed of a single iframe, the slide viewer onto which content is injected and managed, a notes section that allows notes to be created for each slide, and a display section that displays the added notes. Slide Master has a very friendly user interface and includes features such as specialized notes for each individual slide, auto note saving feature and supports audio for each slide.',
    technologies: ['Node.js', 'Express.js', 'Cloud 9'],
    id: 'slide-master',
    github_url: 'https://github.com/dalofeco/Slide-Master',
  },
];

export default AllProjects;
