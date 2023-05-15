const express = require('express')
const router = express.Router() 
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const multer = require('multer')
//const uploads = multer({ dest: "uploads/" });

var filepath = "";

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '../client/public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
  })

  var upload = multer({ storage: storage })
  


router.post('/upload', upload.single('file'), function(req, res) {
  console.log(req.body.type)

  return res.status(200).send({message: "done"});
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