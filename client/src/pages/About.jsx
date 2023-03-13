import React from 'react';
  
const About = () => {
  return (
    <>
    <div class="about">
      <h1>About Us Page</h1>
    </div>
    <div class="card">
      <img src="https://media.istockphoto.com/id/1016761216/photo/portrait-concept.jpg?s=612x612&w=0&k=20&c=JsGhLiCeBZs7NeUY_3wjDlLfVkgDJcD9UCXeWobe7Ak=" alt="" style={{width: '50%'}}/>
      <div class="container">
        <h2>Példa Pista</h2>
        <p class="title">Kisvállalkozó, műkörömépítő.</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Email: pistapelda@gmail.com</p>
        <p>Tel: 06 20 444 5555</p>
      </div>
    </div>
    </>
  );
};
  
export default About;