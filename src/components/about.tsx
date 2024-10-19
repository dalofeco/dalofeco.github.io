import React from 'react';

import AboutData from '../data/about';
import '../styles/components/about.less';

const About = () => (
  <div className="AboutContainer">
    <div className="AboutHeaderContainer">
      <h2 className="AboutHeader">{AboutData.name}</h2>
      <a href={`mailto:${AboutData.email}`} className="AboutSubHeader">
        {AboutData.email}
      </a>
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
