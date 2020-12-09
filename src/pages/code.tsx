import React from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/pages/code.less';
import { ProjectOverview, ProjectsOverview } from '../components/project';

interface CodePageParams {
  projectId: string;
}

const CodePage = () => {
  const { projectId } = useParams<CodePageParams>();
  if (projectId)
    return (
      <Layout modal closeLink="/code">
        <SEO title="Code" />
        <div id="CodeProjectPageContainer">
          <ProjectOverview projectId={decodeURI(projectId)} />
        </div>
      </Layout>
    );

  return (
    <Layout modal>
      <SEO title="Code" />
      <div id="CodePageContainer">
        <ProjectsOverview />
      </div>
    </Layout>
  );
};

export default CodePage;
