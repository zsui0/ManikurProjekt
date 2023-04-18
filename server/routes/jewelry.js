const express = require('express')
const router = express.Router() 
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Jewelry = require('../models/jewelry')

router.post('/add',authenticateToken, async (req, res) => {
  try{
    if(req.body.image == "")
      return res.status(401).json({message: "Image empty"})
    if(req.body.price == "")
      return res.status(401).json({message: "Price empty"})
    if(req.body.type == "")
      return res.status(401).json({message: "Type empty"})
    
    const jewelry = new Jewelry({
      image: req.body.image,
      price: req.body.price,
      type: req.body.type
    })
    await jewelry.save()
    return res.status(200).json({message: "Ékszer sikeresen felvéve"})
  } catch(error) {
    return res.status(500).json({message: error.message})
  }
})


router.post('/listall', async (req,res) => {
  try{
    const jewelrys = await Jewelry.find({type: req.body.type})
    res.status(200).json({result: jewelrys})
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