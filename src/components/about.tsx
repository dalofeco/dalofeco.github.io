import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

import AboutData from '../data/about';
import '../styles/components/about.less';

const About = () => (
  <div className="AboutContainer">
    <div className="AboutHeaderContainer">
      <h2 className="AboutHeader">{AboutData.name}</h2>
      <a href={`mailto:${AboutData.email}`} className="AboutSubHeader">
        {AboutData.email}
      </a>
      <h5 className="AboutPhoneNumber">{AboutData.phone_number}</h5>
      <div className="AboutLinkButtonsContainer">
        <a className="AboutLinkButton AboutResumeLinkButton" href={AboutData.resume_url}>
          <FontAwesomeIcon icon={faAddressBook} />
          <label>&nbsp;&nbsp;Resume</label>
        </a>
      </div>
    </div>
    <div className="AboutContentsContainer">
      {AboutData.description ? <p className="AboutDescription">{AboutData.description}</p> : null}

      <div className="AboutEducationContainer">
        <p className="AboutEducationTitle">{AboutData.education_title}</p>
        <p className="AboutEducationInstitution">{AboutData.education_institution}</p>
      </div>
    </div>
  </div>
);

export default About;
