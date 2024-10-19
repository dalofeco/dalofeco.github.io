/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import WorkExperienceData, { WorkExperienceType } from '../data/work';

import '../styles/components/work.less';
import Loading from './loading';

export const WorkOverview = () => {
  const history = useHistory();

  return (
    <>
      <div className="WorksOverviewHeaderContainer">
        <h2 className="WorksOverviewHeader">Work</h2>
      </div>

      <div className="WorksOverviewContainer">
        {WorkExperienceData.map((work: WorkExperienceType) => (
          <div className="WorkOverviewContainer" key={work.id}>
            <div className="WorkOverviewHeaderContainer">
              <h3 className="WorkOverviewHeader" onClick={() => history.push(`/work/${work.id}`)}>
                {work.project}
              </h3>

              <h4 className="WorkOverviewSubHeader">{work.role}</h4>

              {work.company_url ? (
                <a href={work.company_url} target="_blank" rel="noreferrer" className="WorkOverviewCompanyHeader">
                  {work.company}
                </a>
              ) : (
                <h4 className="WorkOverviewCompanyHeader">{work.company}</h4>
              )}

              <div className="WorkOverviewHeaderRightContainer">
                <p>{`${work.start_date} - ${work.end_date}`}</p>
                <p className="WorkOverviewHeaderRightHighlight">{work.technologies[0]}</p>
              </div>
            </div>
            <div className="FlexLeftRowContainer WorkOverviewSummaryContainer">
              <p className="WorkOverviewSummary">{work.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

interface WorkDetailOverviewProps {
  workExperienceId: string;
}

export const WorkDetailOverview = ({ workExperienceId }: WorkDetailOverviewProps) => {
  const work = React.useMemo(() => WorkExperienceData.find((we) => we.id === workExperienceId), [workExperienceId]);
  if (!work) return <Loading />;
  return (
    <div className="WorkOverviewContainer">
      <h2 className="WorkOverviewTopHeader">{work.project}</h2>

      <div className="WorkOverviewHeaderContainer">
        <div className="WorkOverviewHeaderRightContainer">
          <p>{`${work.start_date} - ${work.end_date}`}</p>
          <p className="WorkOverviewHeaderRightHighlight">{work.technologies[0]}</p>
        </div>

        {work.company_url ? (
          <a href={work.company_url} target="_blank" rel="noreferrer" className="WorkOverviewCompanyHeader">
            {work.company}
          </a>
        ) : (
          <h4 className="WorkOverviewCompanyHeader">{work.company}</h4>
        )}

        <h4 className="WorkOverviewSubHeader">{work.role}</h4>
      </div>
      <div className="FlexLeftRowContainer WorkOverviewSummaryContainer">
        <p className="WorkOverviewSummary">{work.summary}</p>
      </div>
      <h4 className="WorkOverviewResponsabilitiesHeader">Responsabilities</h4>
      <ul className="WorkOverviewResponsabilities">
        {work.responsabilities.map((resp) => (
          <li key={`li-work-responsability-${resp}`}>{resp}</li>
        ))}
      </ul>
      <div className="WorkOverviewTechnologiesContainer">
        {work.technologies.map((tech) => (
          <span key={`li-technologi-${tech}`} className="WorkOverviewTechnology">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
