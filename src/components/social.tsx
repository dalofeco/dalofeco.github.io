/* eslint-disable import/prefer-default-export */
import React from 'react';

import { faTwitter, faInstagram, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/components/social.less';

export const SocialMediaIcons = ({ ...props }) => (
  <div {...props}>
    <div className="SocialMediaIcons">
      <a href="https://github.com/dalofeco" target="_blank" rel="noreferrer">
        <div>
          <FontAwesomeIcon icon={faGithub} className="SocialMediaIcon" />
        </div>
      </a>

      <a href="https://linkedin.com/in/dalofeco" target="_blank" rel="noreferrer">
        <div>
          <FontAwesomeIcon icon={faLinkedin} className="SocialMediaIcon" />
        </div>
      </a>

      <a href="https://dalofeco.medium.com" target="_blank" rel="noreferrer">
        <div>
          <FontAwesomeIcon icon={faMedium} className="SocialMediaIcon" />
        </div>
      </a>

      <a href="https://instagram.com/dalofeco" target="_blank" rel="noreferrer">
        <div>
          <FontAwesomeIcon icon={faInstagram} className="SocialMediaIcon" />
        </div>
      </a>

      <a href="https://twitter.com/dalofeco" target="_blank" rel="noreferrer">
        <div>
          <FontAwesomeIcon icon={faTwitter} className="SocialMediaIcon" />
        </div>
      </a>
    </div>
  </div>
);
