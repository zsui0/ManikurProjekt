const express = require('express')
const router = express.Router() 
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.use(logger)

//Getting all
router.get('/', async (req, res) => { 
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({message: error.message}) // 500: error on server
  }
})
//Getting one
router.get('/:id', getUser, (req, res) => {
  res.json(res.user)
})
//Updating one
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
})
//Deleting one
router.delete('/:id', getUser, async (req, res) => { 
  try {
    await User.deleteOne(res.user)
    res.json({message: "Deleted user"})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

router.post('/register', async (req, res) => {  
  try {
    const checkUserByEmail = await User.findOne({email: req.body.email})
    const checkUserByName = await User.findOne({userName: req.body.userName})
    if(checkUserByEmail != null) {
      res.status(400).json({message: `User already exists with '${req.body.email}' email`})
    } else if(checkUserByName != null) {
      res.status(400).json({message: `User already exists with '${req.body.userName}' name`})
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10) // 10 -> salt
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword
    })

    const newUser = await user.save()
    res.status(201).json(newUser) // 201: successfuly created an object

  } catch (error) {
    res.status(400).json({message: error.message}) // 400: wrong with the user input
  }
})

async function getUser(req, res, next) { // middleware
  let user
  try {
    user = await User.findById(req.params.id)
    if(user == null){
      return res.status(404).json({message: "Cannot find user"})
    }
  } catch (error) {
    return res.status(500).json({message: error.message})
  }

  res.user = user
  next() 
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

function logger(req, res, next){ // middleware logger
  console.log(req.originalUrl)
  next()
}

module.exports = router