const express = require('express')
const router = express.Router() 
const bcrypt = require('bcrypt')
const User = require('../models/user')

router.use(logger)

//Getting all
router.get('/', async (req, res) => { 
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({message: err.message}) // 500: error on server
  }
})
//Getting one
router.get('/:id', getUser, (req, res) => {
  res.json(res.user)
})
//Creating one
router.post('/', async (req, res) => {   
  try {
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
    res.status(400).json({message: err.message}) // 400: wrong with the user input
  }
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

router.post('/login', async (req, res) => {
  let user
  try {
    user = await User.findOne({email: req.body.email})
    if(user == null) {
      return res.status(404).json({message: "Cannot find user"})
    }
    
    if(await bcrypt.compare(req.body.password, user.password)) {
      res.status(200).json({message: "Success"})
    } else {
      res.status(406).json({message: "Not Allowed"})
    }
  } catch (error) {
    
  }
})

async function getUser(req, res, next) {
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

function logger(req, res, next){ // middleware logger
  console.log(req.originalUrl)
  next()
}

module.exports = router