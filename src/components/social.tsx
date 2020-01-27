import React from 'react';

import { faTwitter, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/components/social.scss';


export const SocialMediaIcons = ({...props}) => (
    <div {...props}>
        <div className="SocialMediaIcons">

            <a href="https://github.com/dalofeco" target="_blank">
                <div>
                    <FontAwesomeIcon icon={faGithub} className="SocialMediaIcon"/>
                    {/* <label className="label">GitHub</label> */}
                </div>
            </a>
            
            <a href="https://twitter.com/dalofeco" target="_blank">
                <div>
                    <FontAwesomeIcon icon={faTwitter} className="SocialMediaIcon"/>
                    {/* <label className="label">Twitter</label> */}
                </div>
            </a>

            <a href="https://instagram.com/dalofeco" target="_blank">
                <div>
                    <FontAwesomeIcon icon={faInstagram} className="SocialMediaIcon"/>
                    {/* <label className="label">Instagram</label> */}
                </div>
            </a>

            <a href="https://facebook.com/dalofeco" target="_blank"> 
                <div>
                    <FontAwesomeIcon icon={faFacebook} className="SocialMediaIcon"/>
                    {/* <label className="label">Facebook</label> */}
                </div>
            </a>

        </div>
    </div>
);