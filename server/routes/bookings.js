const express = require('express')
const router = express.Router() 
const jwt = require('jsonwebtoken')
const Booking = require('../models/booking')
const User = require('../models/user')

router.post('/', authenticateToken,  async (req, res) => {
  try{
    const appointment = new Booking({
      userId: req.user._id,
      title: req.body.title,
      start: req.body.startDate,
      end: req.body.endDate
    })
    const newBooking = await appointment.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({message: error.message})
  }
  
})

router.get('/', authenticateToken, async (req, res) => {
  try{
    const bookings = await Booking.find().lean().select('-_id title start end userId')
    res.status(200).json({result: bookings})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})


function authenticateToken(req, res, next) { // middleware
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

module.exports = router