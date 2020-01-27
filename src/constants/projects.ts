/*

Projects.ts

Define all projects to be included in the site.
*/

import {ProjectType} from '../types/project';

class Project {
    name: string = '';
    date: Date | null = null;
    subtitle: string = '';
    summary: string = '';
    technologies: Array<string> = [];
    id: string = '';

    constructor(name: string, date: Date, subtitle: string, summary: string, technologies: Array<string>, id: string) {
        this.name = name;
        this.date = date;
        this.subtitle = subtitle;
        this.summary = summary;
        this.technologies = technologies;
        this.id = id;
    }
}

// const Projects = new Map<string, ProjectType>();

// const AllProjects = [
//     new Project(
//         "VideoClassifier", new Date("April 2018"), "Live Video Classifier using TensorFlow", 
//         "Utilized an LSTM over a CNN to create a model for live video classification. The CNN used was a retrained version of Google's Inception v3 for image classification. The model was retrained using 500+ hours of footage, and deployed on a multithreaded web platform for system usage and management.",
//         ["Python", "TensorFlow", "Tornado"],
//         "videoclassifier"
//     ),

//     new Project(
//         "TensorExpert", new Date("September 2017"), "Machine Learning Data Analysis", 
//         "An active data harvesting on MongoDB database optimized for queries feeds an efficient framework for experimental neural network modeling and testing. An authenticated web interface with built-in session management provides users with an intuitive interface for data visualization, model generation, and running training sessions using TensorFlow.",
//         ["Python", "Tornado", "TensorFlow", "Grafana", "InfluxDB"],
//         "tensorexpert"
//     ),

//     new Project(
//         "ErieGarbage", new Date("December 2016"), "Secure Garbage Service Web Application", 
//         "Desgined, developed and deployed a web application with security and quality considerations. Risk analysis and mitigation techniques were employed to deliver a reliable system. The system was further tested by conducting penetration testing to assure data confidentiality and integrity and assure the absence of quality or security bugs.",
//         ["PHP", "Apache"],
//         "erie-garbage"
//     ), 

//     new Project(
//         "ATM.go", new Date("March 2017"), "ATM System for Capital One",
//         "Developed an Android mobile application for users to generate ATM transactions to be phisically authenticated with a key or facial recognition at the physical ATM.",
//         ["Android SDK for Java", "Node.js with Express.js"],
//         "atm-go"
//     ),

//     new Project(
//         "EZ-Park", new Date("November 2017"), "Smart Parking System for General Motors",
//         "Developed a smart parking application on GM's vehicle SDK that automated the process of routing users parking spots near destination, and automatically pays for parking.",
//         ["Node.js", "JavaScript for GM SDK"],
//         "ez-park"
//     ),

//     new Project(
//         "PACT", new Date("November 2016"), "Pebble Activity Smart Watch Application",
//         "Ranked the potential for outdoor activies given weather and user preferences using IBM Watson services for user tailored sorting and natural voice recognition. Added Amazon Alexa integration to query system using AWS.",
//         ["Node.js", "Amazon Web Services", "IBM Watson"],
//         "pact",
//     ), 

//     new Project(
//         "Slide Master", new Date("May 2016"), "Slide Player Web Application", 
//         "Slide Master is a web slide player that reads lecture slides from a JSON file. It is mainly composed of a single iframe, the slide viewer onto which content is injected and managed, a notes section that allows notes to be created for each slide, and a display section that displays the added notes. Slide Master has a very friendly user interface and includes features such as specialized notes for each individual slide, auto note saving feature and supports audio for each slide.",
//         ["Node.js", "Express.js", "Cloud 9"],
//         "slide-master"
//     )
// ]

// AllProjects.forEach(project => {
//     Projects.set(project.id, project);
// })

// export default Projects;