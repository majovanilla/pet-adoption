import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import detailsStyles from '../../scss/detailsStyles.module.scss';

const Links = () => {
  const { url } = useRouteMatch();
  return (
    <div className={`${detailsStyles.detailsLinks} col-12 d-flex align-items-center`}>
      <Link to={`${url}/about`}>All About</Link>
    </div>
  );
};

export default Links;
