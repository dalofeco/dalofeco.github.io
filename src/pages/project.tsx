import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ProjectOverview } from '../components/project';
import '../styles/templates/project.less';

interface ProjectPageParams {
  projectId: string;
}

const ProjectPage = () => {
  const { projectId } = useParams<ProjectPageParams>();

  return (
    <Layout modal closeLink="/code">
      <SEO title="Code" />
      <div id="CodeProjectPageContainer">
        <ProjectOverview projectId={projectId} />
      </div>
    </Layout>
  );
};
export default ProjectPage;
