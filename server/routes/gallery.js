const express = require('express')
const router = express.Router() 
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Gallery = require('../models/gallery')

router.post('/add',authenticateToken, async (req, res) => {
  try{
    if(req.body.image == "")
      return res.status(401).json({message: "Image empty"})
    
    const gallery = new Gallery({
      image: req.body.image
    })
    await gallery.save()
    return res.status(200).json({message: "Munka sikeresen felvéve"})
  } catch(error) {
    return res.status(500).json({message: error.message})
  }

})

router.get('/listall', async (req,res) => {
    try{
      const works = await Gallery.find()
      res.status(200).json({result: works})
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