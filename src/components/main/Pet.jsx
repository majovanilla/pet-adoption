import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Pet = ({ pet }) => {
  const {
    id, age, gender, size, name, photos, status, tags,
  } = pet;
  return (
    <BrowserRouter>
      <Link to={`/details/${id}`}>
        <Card className="col-12">
          <Card.Img variant="top" src={photos[0].medium} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="row m-0">
              <p>
                Age:
                <span className="pr-2">{age}</span>
              </p>
              <p>
                Gender:
                <span className="pr-2">{gender}</span>
              </p>
              <p>
                Size:
                <span className="pr-2">{size}</span>
              </p>
              <p>
                Status:
                <span className=" ">{status}</span>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </BrowserRouter>
  );
};

// const mapStateToProps = (state) => (
//   console.log(state)
// );

// export default connect(mapStateToProps)(Pet);
export default Pet;
