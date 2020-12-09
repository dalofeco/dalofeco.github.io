import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';

import '../styles/pages/about.less';

const AboutPage = () => (
  <Layout modal>
    <SEO title="About" />
    <div id="AboutPageContainer">
      <About />
    </div>
  </Layout>
);

export default AboutPage;
