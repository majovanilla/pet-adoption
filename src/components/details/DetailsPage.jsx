import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import Description from './Description';
import Links from './Links';
import ImgCarousel from './ImgCarousel';
import SocialDetails from './SocialDetails';

const DetailsPage = ({ location }) => {
  const { pet } = location.state;

  return (
    <div className="row col-12 m-0 p-0">
      {/* <Links /> */}
      <div className="col-12 row pb-2 mb-5 px-0 mx-0">
        <ImgCarousel />
        <Description pet={pet} />
      </div>
      <SocialDetails />
    </div>
  );
};

const mapStateToProps = (state) => (
  <div />
);


DetailsPage.propTypes = {
  location: PropType.objectOf(PropType.object).isRequired,
};

export default connect(mapStateToProps)(DetailsPage);
