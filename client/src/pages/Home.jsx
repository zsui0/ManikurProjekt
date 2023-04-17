import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/carousel.scss'
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
        <div class ="carouselText">
        <h3>Hagyományos manikűr</h3>
        <p>A kéz és a körmök rendszeres törődést, ápolást igényelnek. Manikűr során a bőr a radirozás és krémezés hatására megújul. A körmök japán manikűr következtében visszanyerik csillogásukat.</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('../icons/carousel/masodik.jpg')}
        alt="Second slide"
      />

      <Carousel.Caption>
        <div class ="carouselText">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('../icons/carousel/harmadik.jpg')}
        alt="Third slide"
      />

      <Carousel.Caption>
        <div class ="carouselText">
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>


  );
};
  
export default Home;