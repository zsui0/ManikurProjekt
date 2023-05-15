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
      end: req.body.endDate,
      length : req.body.length
    })
    const newBooking = await appointment.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({message: error.message})
  }
  
})

router.get('/', authenticateToken, async (req, res) => {
  try{
    const bookings = await Booking.find().lean().select('_id userId title start end length')
    res.status(200).json({result: bookings})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})
/*
router.patch('/:id', getUser, async (req, res) => {  // patch update just the new data, put update everything
  if(req.body.lastName != null) {
    res.user.lastName = req.body.lastName
  }
  //....
  try {
    const updatedUser = await res.user.save()
    res.json(updatedUser)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})*/

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