import React from 'react';
import styles from '../styles/about.css'


const About = () => {

  return (
    <>
    <div class="about">
      <h1>Rólam</h1>
    </div>
    <div class="card">
      <img src={require('../icons/bela.jpg')} alt="" style={{width: '50%'}}/>
      <div class="container">
        <h2>Körmös Béla</h2>
        <p class="title">Kisvállalkozó, műkörömépítő.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus, turpis vitae rutrum lacinia, elit justo tempor ante, at ornare eros ante ac dolor. Maecenas pulvinar risus eu commodo consequat. Nunc est libero, ornare vel ipsum vitae, sollicitudin viverra ex. 
           Vestibulum malesuada sapien quis ex imperdiet, sit amet elementum odio molestie.</p>
        <p>Email: korombela@gmail.com</p>
        <p>Telefon: 06 20 444 5555</p>
        <p>Elhelyezkedés: Bélatelep, Toldi Miklós utca 51.</p>
      </div>
    </div>
    </>
  );
};
  
export default About;