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
        src="holder.js/800x400?text=First slide&bg=373940"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Hagyományos manikűr</h3>
        <p>A kéz és a körmök rendszeres törődést, ápolást igényelnek. Manikűr során a bőr a radirozás és krémezés hatására megújul. A körmök japán manikűr következtében visszanyerik csillogásukat.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Second slide&bg=282c34"
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
        src="holder.js/800x400?text=Third slide&bg=20232a"
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