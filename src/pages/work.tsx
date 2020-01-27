import React from "react"
import {navigate} from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import { WorkOverview } from "../components/work";
import '../styles/pages/work.scss';

const WorkPage = () => (
  <Layout modal>
		<SEO title="Work" />
		<div id="WorkPageContainer">
			<WorkOverview />
		</div>
		
  </Layout>
)

export default WorkPage;
