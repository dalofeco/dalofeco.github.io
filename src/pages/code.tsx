import React from "react"
import {navigate} from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/pages/code.scss';
import { ProjectsOverview } from "../components/project"

const CodePage = () => (
  <Layout modal>
		<SEO title="Code" />
		<div id="CodePageContainer">
			<ProjectsOverview navigate={navigate}/>
		</div>
		
  </Layout>
)

export default CodePage;
