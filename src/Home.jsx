import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => {
  return (
    <>
      <Jumbotron className="jumbo-section">
        <h1 className="display-4 media-disp text-white text-capitalize">welcome to mesla</h1>
        <p className="lead text-white media-jumbo-title jumbo-title">Share and grow knowledge!!!</p>
        <hr className="my-2" />
        <p className="text-white media-jumbo-lead jumbo-paragraph">We want to connect people who have knowledge to people who need it,to bring people with
        different<br /> perspective so they can understand eact other better,and to empower everyone to share their knowledge </p>
        <p className="lead">
          <Button color="primary text-capitalize  jumbo-button">create an account</Button>
        </p>
      </Jumbotron>
      <div className="medias">
      <p className="text-center"> hi</p>
      </div>
    </>
  );
};

export default Home;