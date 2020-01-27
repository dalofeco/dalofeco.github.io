import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import { WorkDetailOverview } from "../components/work"
import { WorkExperienceType } from '../types/work';
import '../styles/templates/work.scss';

interface WorkTemplateProps {
    pageContext: WorkExperienceType;
}

const WorkTemplate = ({pageContext}: WorkTemplateProps) => {

    return (
        <Layout modal closeLink="/work">
		<SEO title="Work" />
		<div id="WorkExperiencePageContainer">
			<WorkDetailOverview work={pageContext}/>
		</div>
		
  </Layout>
    )
}
export default WorkTemplate;
