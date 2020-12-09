import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Navigation from '../components/navigation';

import '../styles/pages/index.less';

const IndexPage = () => {
  const [fadeTimeout, _setFadeTimeout] = React.useState<boolean>(false);

  return (
    <Layout>
      <SEO title="Home" />
      <div className={`IndexPageContainer ${fadeTimeout ? 'FadeOut' : ''}`}>
        <Navigation timeout={false} />
      </div>
    </Layout>
  );
};

export default IndexPage;
