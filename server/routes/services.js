const express = require('express')
const router = express.Router() 
const jwt = require('jsonwebtoken')
const Booking = require('../models/booking')
const Service = require('../models/service')

router.post('/',  async (req, res) => {
  try{
    const job = new Service({
      title: req.body.title,
      length: req.body.length,
      price: req.body.price
    })
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({message: error.message})
  }
  
})
/*
router.get('/', authenticateToken, async (req, res) => {
  try{
    const bookings = await Booking.find().lean().select('-_id title start end')
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
*/
module.exports = router