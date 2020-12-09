/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import AllProjects, { ProjectType } from '../data/projects';

import '../styles/components/project.less';
import Loading from './loading';

export const ProjectsOverview = () => {
  const history = useHistory();
  return (
    <>
      <h2 id="ProjectsContainerHeader">Code</h2>
      <div id="ProjectsContainer">
        {AllProjects.map((project: ProjectType) => (
          <div className="ProjectContainer">
            <div className="FlexLeftColContainer ProjectHeadersContainer">
              <h3 className="ProjectHeader" onClick={() => history.push(`/code/${project.id}`)}>
                {project.name}
              </h3>
              <h4 className="ProjectSubHeader">{project.subtitle}</h4>
              <p className="ProjectDate">{project.date}</p>
              <p className="ProjectHighlight">{project.technologies[0]}</p>
            </div>
            <p className="ProjectSummary">{project.summary}</p>
            {/* <ul className="ProjectTechnologyList">
              {project.technologies.map((technology) => (
                <li key={technology} className="ProjectTechnologyItem">
                  {technology}
                </li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
    </>
  );
};

interface ProjectOverviewProps {
  projectId: string;
}

export const ProjectOverview = ({ projectId }: ProjectOverviewProps) => {
  const project = React.useMemo(() => {
    if (projectId) return AllProjects.find((p) => p.id === projectId);
    return undefined;
  }, [projectId]);

  if (!project) return <Loading />;

  return (
    <div id="ProjectOverviewContainer">
      <h2 className="ProjectHeader">{project.name}</h2>
      <h4 className="ProjectSubHeader">{project.subtitle}</h4>
      <p className="ProjectDate">{project.date}</p>
      <div className="ProjectLinksContainer">
        {project.github_url ? (
          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            className="ProjectOverviewLinkButton ProjectOverviewGithubButton">
            <FontAwesomeIcon icon={faGithub} />
            <label>&nbsp;&nbsp;Github</label>
          </a>
        ) : null}
        {project.demo_url ? (
          <a
            href={project.demo_url}
            target="_blank"
            rel="noreferrer"
            className="ProjectOverviewLinkButton ProjectOverviewDemoButton">
            <FontAwesomeIcon icon={faPlay} />
            <label>&nbsp;&nbsp;Demo</label>
          </a>
        ) : null}
      </div>
      <p className="ProjectSummary">{project.summary}</p>
      <ul className="ProjectTechnologyList">
        {project.technologies.map((technology) => (
          <li key={technology} className="ProjectTechnologyItem">
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
};
