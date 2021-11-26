import React from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

const GA = () => {
  const location = useLocation();
  React.useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location.pathname]);

  return null;
};

export default GA;
