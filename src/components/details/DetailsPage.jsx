import React from 'react';
import { connect } from 'react-redux';
import Description from './Description';
import Links from './Links';
import ImgCarousel from './ImgCarousel';

const DetailsPage = () => (
  <div>
    <h1>Details page</h1>
    <ImgCarousel />
    <Description />
    <Links />
  </div>
);

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return (
    <div />
  );
};

export default connect(mapStateToProps)(DetailsPage);
