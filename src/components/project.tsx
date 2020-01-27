import React from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { ProjectType } from '../types/project';

import "../styles/components/project.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

interface ProjectsOverviewProps {
    navigate: Function;
}

export const ProjectsOverview = ({ navigate } : ProjectsOverviewProps) => {

    const projectsDataQuery = useStaticQuery(graphql`
        query ProjectsData {
            allProjectsJson {
                nodes {
                    name
                    subtitle
                    summary
                    technologies
                    id
                    date
                    github_url
                }
            }
        }
    `)


    const projectsData = projectsDataQuery.allProjectsJson.nodes;
    const projectsHTML: Array<JSX.Element> = []

    projectsData.forEach(project => {
        projectsHTML.push((
            <div className="ProjectContainer">
                <div className="FlexLeftColContainer ProjectHeadersContainer">
                    <h3 className="ProjectHeader" onClick={() => navigate(`/code/${project.id}`)}>{project.name}</h3>
                    <h4 className="ProjectSubHeader">{project.subtitle}</h4>
                    <p className="ProjectDate">{project.date}</p>
                    <p className="ProjectHighlight">{project.technologies[0]}</p>
                </div>
                <p className="ProjectSummary">{project.summary}</p>
                {/* <ul className="ProjectTechnologyList">
                    {project.technologies.map(technology => (
                        <li key={technology} className="ProjectTechnologyItem">{technology}</li>
                    ))}
                </ul> */}
            </div>  
        ));
    });

    return (
        <>
        <h2 id="ProjectsContainerHeader">Code</h2>
        <div id="ProjectsContainer">{projectsHTML}</div>
        </>
    )
}


interface ProjectOverviewProps {
    project: ProjectType;
}

export const ProjectOverview = ({project} : ProjectOverviewProps) => {
    return (
        <div id="ProjectOverviewContainer">
            <h2 className="ProjectHeader">{project.name}</h2>
            <h4 className="ProjectSubHeader">{project.subtitle}</h4>
            <p className="ProjectDate">{project.date}</p>
            <div className="ProjectLinksContainer">
                {project.github_url ? 
                    <a href={project.github_url} target="_blank" className="ProjectOverviewLinkButton ProjectOverviewGithubButton">
                        <FontAwesomeIcon icon={faGithub}/><label>&nbsp;&nbsp;Github</label>
                    </a> : null}
                {project.demo_url ? 
                    <a href={project.demo_url} target="_blank" className="ProjectOverviewLinkButton ProjectOverviewDemoButton">
                        <FontAwesomeIcon icon={faPlay}/><label>&nbsp;&nbsp;Demo</label>
                    </a> : null}
            </div>
            <p className="ProjectSummary">{project.summary}</p>
            <ul className="ProjectTechnologyList">
                {project.technologies.map(technology => (
                    <li key={technology} className="ProjectTechnologyItem">{technology}</li>
                ))}
            </ul>
        </div>
    )
}

