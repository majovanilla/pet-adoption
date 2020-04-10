import React from 'react';
import ImgCarousel from '../details/ImgCarousel';
import Description from '../details/Description';
import Links from '../details/Links';


const Pet = ({
  id,
  url,
  type,
  species,
  age,
  gender,
  size,
  name,
  photos,
  status,
  tags,
}) => (
  <div className="">
    <ImgCarousel />
    <Description />
    <Links />
  </div>
);

export default Pet;
