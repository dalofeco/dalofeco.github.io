import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import { ProjectOverview } from "../components/project"
import '../styles/templates/project.scss';

interface ProjectTemplateProps {
    pageContext: any;
}

const ProjectTemplate = ({pageContext}: ProjectTemplateProps) => {

    return (
        <Layout modal closeLink="/code">
		<SEO title="Code" />
		<div id="CodeProjectPageContainer">
			<ProjectOverview project={pageContext}/>
		</div>
		
  </Layout>
    )
}
export default ProjectTemplate;
