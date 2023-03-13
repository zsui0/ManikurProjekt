import React, { Fragment, useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import httpClient from './httpClient';


import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Test from './pages/Test';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import Post from './Post';
import Header from './pages/Header';
import LeftCard from './LeftCard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import BookingForm from './pages/BookingForm';

const API_URL = "http://localhost:5000";

const App = () => (

<BrowserRouter>
      <Fragment>
        <Header />
        
        <main className="my-5 py-5">
          <Container className="px-0">
            <Routes>   
              <Route path="/" element={<Home />} />
              <Route path="profile" element={<Profile />}/>
              <Route path="about" element={<About />} />
              <Route path="test" element={<Test api_url={API_URL}/>} />
              <Route path="booking" element={<><Booking /> <BookingForm/> </>} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="logout" element={<Logout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </main>
        
      </Fragment>
    </BrowserRouter>
    
);
export default App;