import React from 'react';


const Description = ({
  id,
  url,
  type,
  species,
  breeds,
  colors,
  age,
  gender,
  size,
  coat,
  name,
  description,
  photos,
  videos,
  status,
  attributes,
  environment,
  tags,
  contact,
  _links,
}) => (
  <div className="description">
    <h2>
      {name}
    </h2>
  </div>
);

export default Description;
