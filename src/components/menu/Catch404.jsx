import React from 'react';
import PropTypes from 'prop-types';

const Catch404 = props => {
  const { history } = props;

  const redirect = () => {
    window.setTimeout(() => {
      history.goBack();
    }, 1500);
  };

  return (
    <div className="Catch404">
      <h3>There is nothing here</h3>
      <p>404 </p>
      {redirect()}
    </div>
  );
};

Catch404.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Catch404;
