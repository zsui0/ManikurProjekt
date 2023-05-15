import React, { Fragment, useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import AuthService from './services/auth.service';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import Header from './pages/Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
import BookingForm from './pages/BookingForm';
import Gyuru from './pages/Gyuru';
import Nyaklanc from './pages/Nyaklanc';
import Egyeb from './pages/Egyeb';
import Gallery from './pages/Gallery';
import MyBookings from './pages/MyBookings';

const App = () => {

  const [currentUser, setCurrentUser] = useState(undefined);


  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      if(currentUser === undefined){
        setCurrentUser(user);
      }
    }
  }, [currentUser]);

return (
    <BrowserRouter>
      <Fragment>
        <Header currentUser={currentUser}/>
        
        <main className="my-5 py-5">
          <Container fluid className="px-0">
            <Routes>   
              <Route path="/" element={<Home currentUser={currentUser} />} />
              <Route path="profile" element={<Profile currentUser={currentUser} />}/>
              <Route path="mybookings" element={<MyBookings currentUser={currentUser} />}/>
              <Route path="about" element={<About />} />
              <Route path="booking" element={<><Booking currentUser={currentUser}/><BookingForm/></>} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              <Route path="gyuru" element={<Gyuru currentUser={currentUser}/>} /> 
              <Route path="nyaklanc" element={<Nyaklanc currentUser={currentUser}/>} />
              <Route path="egyeb" element={<Egyeb currentUser={currentUser}/>} />
              <Route path="gallery" element={<Gallery currentUser={currentUser}/>} />
            </Routes>
          </Container>
        </main>
        
      </Fragment>
    </BrowserRouter>
);
};
export default App;