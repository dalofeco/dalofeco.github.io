import React, {useState} from 'react'
import { navigate } from 'gatsby'; 
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SocialMediaIcons } from './social';

import '../styles/components/navigation.scss';


interface NavigationProps {
    onNavigate: Function;
    timeout: boolean;
}

const Navigation = (props: NavigationProps) => {

    const [name, setName] = useState('Dalofeco');
    const [fadeOut, setFadeOut] = useState(false);

    const changeHeader = (header: string) => {
        setFadeOut(true);
        setTimeout(() => {
            setName(header)
            setFadeOut(false);
        }, 300)
    }

    return (
        <div id="NavigationHome">

            <FontAwesomeIcon 
                className="NavigationLogo" 
                icon={faDiceD20}/>

            <div className="VerticalLine"/>

            <div className="NavigationHeaderContainer">
                <h1 className={fadeOut ? 'FadeOut' : null}
                    onMouseOver={() => changeHeader('Daniel Lopez')}
                    onMouseOut={() => changeHeader('Dalofeco')}>
                        {name}
                </h1>
                <p className="NavigationSubTitle">A computer scientist ready to deliver next generation software</p>
                <SocialMediaIcons className="NavigationSocialMediaIcons" style={{'margin': 0}}/>
            </div>

            <div className="VerticalLine"/>

            <nav className="NavigationLinks">
                <div className="NavigationLinksList">
                    <div className="HalfWidth FlexRightRowContainer">
                        <a href="javascript:;" onClick={() => {props.onNavigate('code')}}>Code</a>
                        <a href="javascript:;" onClick={() => {props.onNavigate('work')}}>Work</a>
                    </div> 

                    <div className="HalfWidth FlexLeftRowContainer">
                        <a href="javascript:;" onClick={() => {props.onNavigate('gallery')}}>Gallery</a>
                        <a href="javascript:;" onClick={() => {props.onNavigate('contact')}}>Contact</a>
                    </div> 
                </div>
            </nav>
        </div>
    )
}


export default Navigation
