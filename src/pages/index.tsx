import React, {useState, useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/pages/index.scss';
import Navigation from "../components/navigation"
import { navigate } from "gatsby";

const IndexPage = () => {

	const [navigateLink, setNavigateLink] = useState(null);
	const [fadeTimeout, setFadeTimeout] = useState(null);

	useEffect(() => {
		if (navigateLink && !fadeTimeout) {
			setTimeout(() => navigate(navigateLink), 300);
			setFadeTimeout(true);
		}
	});

	return (
		<Layout>
			<SEO title="Home" />
		
			<div className={`IndexPageContainer ${fadeTimeout ? "FadeOut" : ""}`}>
				<Navigation onNavigate={setNavigateLink} timeout={false}/>
			</div>
		</Layout>
	)
}

export default IndexPage
