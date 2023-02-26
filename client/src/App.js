import React, { Fragment, useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Test from './pages/Test';
import Post from './Post';
import Header from './pages/Header';
import LeftCard from './LeftCard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Booking from './pages/Booking';

const API_URL = "http://localhost:5000";

const App = () => (
  <BrowserRouter>
    <Fragment>
      
      <Header />
      
      <main className="my-5 py-5">
        <Container className="px-0">
          <Routes>   
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="test" element={<Test api_url={API_URL}/>} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </main>
      
    </Fragment>
  </BrowserRouter>
);

export default App;

{/*
    <main className="my-5 py-5">
      <Container className="px-0">
        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
        
        
          <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
            <LeftCard />
          </Col>
          
          <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            <Post />
          </Col>
        
        </Row>
      </Container>
    </main>
    */}
/*
import React, {useState, useEffect} from 'react'

const API_URL = "http://localhost:5000"
const kuki = "restes"

function App() {

  const[data,setData] = useState([{}])
  
  useEffect(()=>{
    fetch(API_URL+"/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.members === "undefined") ? (
        <p>Loading...</p>
      ) : (
          data.members.map((member,i) => (
            <p key={i}>{member}</p>
          ))
      )}
    </div>
  )
}

export default App
*/