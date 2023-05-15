const express = require('express')
const router = express.Router() 
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const multer = require('multer')


  


router.post('/upload_gyuru', function(req, res) {

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '../client/public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
  })

  var upload = multer({ storage: storage }).single('file')

  console.log(req.body)
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)
  })
});

router.post('/upload_nyaklanc', function(req, res) {

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '../client/public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
  })

  var upload = multer({ storage: storage }).single('file')

  console.log(req.body)
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)
  })
});

router.post('/upload_gallery', function(req, res) {

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '../client/public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
  })

  var upload = multer({ storage: storage }).single('file')

  console.log(req.body)
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)
  })
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