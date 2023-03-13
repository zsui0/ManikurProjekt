if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('./models/user')
const bcrypt = require('bcrypt')
const cors = require('cors')
const app = express()
const db = connect();

app.use(express.static("public")) // automatically use public folder files for static page rendering, you can access/open files in http line : 'apiHttp'/test/test.html
app.use(express.urlencoded({ extended: true })) // allow access information coming from Forms
app.use(express.json()) // same as urlencoded just with json
app.use(cors())

let refreshTokens = [] // It would be better in database

app.post('/token', (req, res) => {
  const refreshToken = req.body.token
  if (refreshToken == null) return res.status(401)
  if (!refreshTokens.includes(refreshToken)) return res.status(403)
  
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403)
    const accessToken = generateAccessToken({ name: user.userName})
    res.json({accessToken: accessToken})
  })
})

app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email}) // Check for email
    if(user == null) {
      return res.status(404).json({message: "Cannot find user"})
    }
    
    if(await bcrypt.compare(req.body.password, user.password)) { // Check if password right
      const accessToken = generateAccessToken(user)
      const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET)
      refreshTokens.push(refreshToken)
      res.status(200).json({message: "Logged In", name: user.userName, accessToken: accessToken, refreshToken: refreshToken})
    } else {
      res.status(406).json({message: "Not Allowed"})
    }
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.delete('logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.status(204)
})

function generateAccessToken(user) {
  return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5h' })
}

function logger(req, res, next){ // middleware logger
  console.log(req.originalUrl)
  next()
}

async function connect() { // MongoDB connection
  try {
    await mongoose.connect(process.env.DATABASE_URI)
    console.log("Connected to MongoDB");
    return mongoose.connection
  } catch(error) {
    console.error(error)
    return "error"
  }
}

app.listen(process.env.AUTH_PORT, () => { // Start backend
  console.log(`Server started on port ${process.env.AUTH_PORT}`)
})

/*
    mongodb name1: backend-server, password: U3bYIj1nb9l3ly4P 
            name2: admin, pass: CfX1HRJGgCYOkQNR
    mongodb+srv://<username>:<password>@manikur.h20qhig.mongodb.net/?retryWrites=true&w=majority
*/