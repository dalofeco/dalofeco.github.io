/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { SocialMediaIcons } from './social';

import '../styles/components/navigation.less';

interface NavigationProps {
  timeout: boolean;
}

const Navigation = (_props: NavigationProps) => {
  const [name, setName] = useState('Dalofeco');
  const [fadeOut, setFadeOut] = useState(false);

  const changeHeader = (header: string) => {
    setFadeOut(true);
    setTimeout(() => {
      setName(header);
      setFadeOut(false);
    }, 300);
  };

  return (
    <div id="NavigationHome">
      <FontAwesomeIcon className="NavigationLogo" icon={faDiceD20} />

      <div className="VerticalLine" />

      <div className="NavigationHeaderContainer">
        <h1
          className={fadeOut ? 'FadeOut' : ''}
          onMouseOver={() => changeHeader('Daniel Lopez')}
          onMouseOut={() => changeHeader('Dalofeco')}>
          {name}
        </h1>
        <p className="NavigationSubTitle">A computer scientist ready to deliver next generation software</p>
        <SocialMediaIcons className="NavigationSocialMediaIcons" style={{ margin: 0 }} />
      </div>

      <div className="VerticalLine" />

      <nav className="NavigationLinks">
        <div className="NavigationLinksList">
          <div className="HalfWidth FlexRightRowContainer">
            <Link to="/code">Code</Link>
            <Link to="/work">Work</Link>
          </div>

          <div className="HalfWidth FlexLeftRowContainer">
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
