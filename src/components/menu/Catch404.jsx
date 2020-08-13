import React from 'react';
import PropTypes from 'prop-types';
import tempMenus from '../../scss/tempMenus.module.scss';

const Catch404 = props => {
  const { history } = props;

  const redirect = () => {
    window.setTimeout(() => {
      history.goBack();
    }, 1500);
  };

  return (
    <div className={tempMenus.tempMenu}>
      <h2>There is nothing here</h2>
      <br />
      <p className={tempMenus.text}>You will be redirected back in 1.5 seconds</p>
      <p>error: 404 Not Found</p>
      {redirect()}
    </div>
  );
};

Catch404.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Catch404;
