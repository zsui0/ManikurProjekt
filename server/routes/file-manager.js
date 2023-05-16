const express = require('express')
const router = express.Router() 
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const multer = require('multer')
const Jewelry = require('../models/jewelry')
const Gallery = require('../models/gallery')

var filepath = "";

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, "../client/src/icons/kepek")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  }
  })

  var upload = multer({ storage: storage })
  


router.post('/upload', authenticateToken, upload.single('file'),  async function(req, res) {
  if(req.user.role == "admin"){
  if(req.file){
    if(req.file.mimetype == "image/jpeg" || req.file.mimetype == "image/png"){
      if(req.body.type == "gallery"){
        try{        
          const gallery = new Gallery({
            image: req.file.originalname
          })
          await gallery.save()
          return res.status(200).json({message: "Munka sikeresen felvéve"})
        } catch(error) {
          return res.status(500).json({message: error.message})
        }
      } else {
        try{        
          const jewelry = new Jewelry({
            image: req.file.originalname,
            price: req.body.price,
            type: req.body.type
          })
          await jewelry.save()
          return res.status(200).json({message: "Ékszer sikeresen felvéve"})
        } catch(error) {
          return res.status(500).json({message: error.message})
        }
      }
    }
  } else {
    return res.status(400).json({message: "Nem adtál meg fájlt!"})
  }
  return res.status(200).send({message: "done"});
  } else return res.status(400).send({message: "Access Denied!"});
});



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