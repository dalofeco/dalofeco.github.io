/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import "../styles/components/layout.scss";

interface LayoutProps {
	modal?: boolean;
	closeLink?: string;
	children: React.ReactNode;
}

const Layout = ({ modal = false, closeLink = "/", children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
	query SiteTitleQuery {
	  site {
		siteMetadata {
		  title
		}
	  }
	}
  `)

	const backgroundClick = (e) => {
		if (e && e.target && e.target.id === "LayoutContentContainer") {
			e.stopPropagation();
			if (modal) navigate('/');
		}
	}

  return (
	<>
	{modal ? 
		<div id="LayoutContentContainer" onClick={backgroundClick}>
			<div id="LayoutContentContainerModal">
				<div id="LayoutContentContainerCloseDiv">
					<button id="LayoutContentContainerModalCloseButton"
							type="button" onClick={() => navigate(closeLink)}>
						<FontAwesomeIcon icon={faTimes}/>
					</button>
				</div>
				
				{children}
			</div>
		</div>

		: 

		<div id="LayoutContentContainer">
			{children}
		</div>
	}


	<div id="LayoutBackground">
		<div id='LayoutBackgroundBlack'/>
	</div>

	

	{/* <footer>
		© {new Date().getFullYear()} Dalofeco
	</footer> */}
	</>
  )
}

export default Layout;
