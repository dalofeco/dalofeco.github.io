import React from 'react';
import {useStaticQuery, graphql, navigate} from 'gatsby';
import { WorkExperienceType } from '../types/work';
import '../styles/components/work.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faAddressCard } from '@fortawesome/free-solid-svg-icons';

export const WorkOverview = () => {

    const workQueryData = useStaticQuery(graphql`
        query WorkData {
            allWorkJson {
                nodes {
                    id
                    company
                    company_url
                    role
                    project
                    start_date
                    end_date
                    responsabilities
                    summary
                    technologies
                }
            }
        }
    `)

    const workData: Array<WorkExperienceType> = workQueryData.allWorkJson.nodes;

    return (
        <>
        <div className="WorksOverviewHeaderContainer">
            <h2 className="WorksOverviewHeader">Work</h2>
            <div className="WorksOverviewLinksContainer">
                <a className="WorksOverviewLinkButton WorksOverviewResumeLinkButton" href='files/resume.pdf'>
                    <FontAwesomeIcon icon={faAddressCard}/>
                    <label>&nbsp;&nbsp;Resume</label>
                </a>
                {/* <a href="/files/resume.pdf" target="_blank">
                    <FontAwesomeIcon icon={faDownload}/>&nbsp;&nbsp;Resume
                </a> */}
            </div>
        </div>
           
        <div className="WorksOverviewContainer">
            {workData.map(work => (
                <div className="WorkOverviewContainer">
                    <div className="WorkOverviewHeaderContainer">
                        <h3 className="WorkOverviewHeader" onClick={() => navigate(`/work/${work.id}`)}>
                            {work.project}
                        </h3>
                        
                        <h4 className="WorkOverviewSubHeader">
                            {work.role}
                        </h4>

                        {work.company_url ? 
                            <a href={work.company_url} target="_blank"
                                className="WorkOverviewCompanyHeader">
                                    {work.company}
                            </a> 
                            : 
                            <h4 className="WorkOverviewCompanyHeader">
                                {work.company}
                            </h4>
                        }


                        <div className="WorkOverviewHeaderRightContainer">
                            <p>{work.start_date} - {work.end_date}</p>
                            <p className="WorkOverviewHeaderRightHighlight">{work.technologies[0]}</p>
                        </div>

                    </div>
                    <p className="WorkOverviewSummary">
                        {work.summary}
                    </p>
                </div>
            ))}
        </div>
        </>
    )
}


interface WorkDetailOverviewProps {
    work: WorkExperienceType;
}

export const WorkDetailOverview = ({work} : WorkDetailOverviewProps) => (
    <div className="WorkOverviewContainer">

        <h2 className="WorkOverviewTopHeader">
            {work.project}
        </h2>

        <div className="WorkOverviewHeaderContainer">
            <div className="WorkOverviewHeaderRightContainer">
                <p>{work.start_date} - {work.end_date}</p>
                <p className="WorkOverviewHeaderRightHighlight">{work.technologies[0]}</p>
            </div>
            

            {work.company_url ? 
                <a href={work.company_url} target="_blank"
                    className="WorkOverviewCompanyHeader">
                        {work.company}
                </a> 
                : 
                <h4 className="WorkOverviewCompanyHeader">
                    {work.company}
                </h4>
            }


            <h4 className="WorkOverviewSubHeader">
                {work.role}
            </h4>

        </div>
        <p className="WorkOverviewSummary">
            {work.summary}
        </p>
        <h4 className="WorkOverviewResponsabilitiesHeader">Responsabilities</h4>
        <ul className="WorkOverviewResponsabilities">
            {work.responsabilities.map((resp, i) => (
                <li key={i}>{resp}</li>
            ))}
        </ul>
        <div className="WorkOverviewTechnologiesContainer">
            {work.technologies.map((tech, i) => (
                <span key={`${tech}-${i}`} className="WorkOverviewTechnology">{tech}</span>
            ))}
        </div>
    </div>
)