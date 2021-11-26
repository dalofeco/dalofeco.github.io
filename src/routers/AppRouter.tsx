import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/index';
import CodePage from '../pages/code';
import GalleryPage from '../pages/gallery';
import WorkPage from '../pages/work';
import AboutPage from '../pages/about';

const AppRouter = () => (
  <HashRouter>
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/code" component={CodePage} />
        <Route path="/code/:projectId" component={CodePage} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route path="/gallery/:albumId" component={GalleryPage} />
        <Route exact path="/work" component={WorkPage} />
        <Route path="/work/:workExperienceId" component={WorkPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </>
  </HashRouter>
);

export default AppRouter;
