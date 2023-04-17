import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
  
const Home = (user) => {
  return (
    /*<div>
      <h1>Üdvözlünk a főoldalon!</h1>
      {user.currentUser === undefined ? (
        <h1>Nem vagy bejelentkezve</h1>
      ) : (
        
        <div>
          <h1>Bevagy jelentkezve!</h1>
        </div>
      )}
    </div>*/

    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('../icons/carousel/elso.jpg')}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('../icons/carousel/masodik.jpg')}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('../icons/carousel/harmadik.jpg')}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>


  );
};
  
export default Home;