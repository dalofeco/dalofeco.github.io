import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { WorkOverview, WorkDetailOverview } from '../components/work';
import '../styles/pages/work.less';

interface WorkPageParams {
  workExperienceId?: string;
}

const WorkPage = () => {
  const { workExperienceId } = useParams<WorkPageParams>();
  if (workExperienceId)
    return (
      <Layout modal>
        <SEO title="Work" />
        <div id="WorkExperiencePageContainer">
          <WorkDetailOverview workExperienceId={workExperienceId} />
        </div>
      </Layout>
    );

  return (
    <Layout modal>
      <SEO title="Work" />
      <div id="WorkPageContainer">
        <WorkOverview />
      </div>
    </Layout>
  );
};
export default WorkPage;
