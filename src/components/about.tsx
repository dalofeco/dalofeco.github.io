import React from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import {AboutDataType} from '../types/about';

import '../styles/components/about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    
    const aboutQueryData = useStaticQuery(graphql`
        query AboutData {
            allDataJson {
                nodes {
                    name
                    email
                    phone_number
                    description
                    resume_url
                    education_title
                    education_institution
                }
            }
        }
    
    `)

    const aboutData: AboutDataType = aboutQueryData.allDataJson.nodes[0];

    return (
        <div className="AboutContainer">
            <div className="AboutHeaderContainer">
                <h2 className="AboutHeader">{aboutData.name}</h2>
                <a href={`mailto:${aboutData.email}`} className="AboutSubHeader">{aboutData.email}</a>
                <h5 className="AboutPhoneNumber">{aboutData.phone_number}</h5>
                <div className="AboutLinkButtonsContainer">
                    <a className="AboutLinkButton AboutResumeLinkButton" href={aboutData.resume_url}>
                        <FontAwesomeIcon icon={faAddressCard}/>
                        <label>&nbsp;&nbsp;Resume</label>
                    </a>
                </div>

            </div>
            <div className="AboutContentsContainer">
                {aboutData.description ? 
                    <p className="AboutDescription">{aboutData.description}</p>
                 : null}

                <div className="AboutEducationContainer">
                    <p className="AboutEducationTitle">{aboutData.education_title}</p>
                    <p className="AboutEducationInstitution">{aboutData.education_institution}</p>
                 </div>

            </div>
        </div>
    )
}

export default About;