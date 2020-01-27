import React from 'react';
import {useStaticQuery, graphql, navigate} from 'gatsby';
import { WorkExperienceType } from '../types/work';
import '../styles/components/work.scss'

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
        <h2 className="WorksOverviewHeader">Work</h2>
        <div className="WorksOverviewContainer">
            {workData.map(work => (
                <div className="WorkOverviewContainer">
                    <div className="WorkOverviewHeaderContainer">
                        <div className="WorkOverviewHeaderRightContainer">
                            <p>{work.start_date} - {work.end_date}</p>
                            <p className="WorkOverviewHeaderRightHighlight">{work.technologies[0]}</p>
                        </div>
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
    </div>
)