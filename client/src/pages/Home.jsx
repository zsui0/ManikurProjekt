import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/carousel.scss'
const Home = (user) => {
  return (
    <>
    <Carousel controls={false}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('../icons/carousel/elso.jpg')}
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
      />

      <Carousel.Caption>
        <h3>Épített műköröm</h3>
        <p>A gyenge rövid körmű vendégeknek megoldás a műköröm. Esztétikusabbá, ápolttá teszi a kezet, miközben nem kell hetekig bajlódni a körmökkel otthon. </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('../icons/carousel/harmadik.jpg')}
      />

      <Carousel.Caption>
        <h3>Gél lakk</h3>
        <p>A műkörömhöz hasonlóan tartós, de nem vastagítja meg a körmöket. Tartóssága akár 3-4 hét, nem kopik, erős körömnél nem pattog le. </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <div class="galleryButtonDiv">
    <a href="/gallery"><img class="galleryButton" src={require('../icons/gallery.png')} alt="galéria" style={{width: 300}}/></a>
  </div>
  </>
  );
};
  
export default Home;