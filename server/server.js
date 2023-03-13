if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

/*
    mongodb name1: backend-server, password: U3bYIj1nb9l3ly4P 
            name2: admin, pass: CfX1HRJGgCYOkQNR
    mongodb+srv://<username>:<password>@manikur.h20qhig.mongodb.net/?retryWrites=true&w=majority
*/

const db = connect();

app.use(express.static("public")) // automatically use public folder files for static page rendering, you can access/open files in http line : 'apiHttp'/test/test.html
app.use(express.urlencoded({ extended: true })) // allow access information coming from Forms
app.use(express.json()) // same as urlencoded just with json
app.use(cors())

app.set('view engine', 'ejs') // for rendering html (ejs or pug), download extension ejs language support
// app.use(logger) : if on top everything will use it, you can change it's location

// requests app.get()/post()/delete()/put():update
/*  Basic request structure:
    app.get('/', (req, res) => {
        download file on client: res.download("server.js");
        examples for send to frontend: res.send('Hi') / res.sendStatus(500) / res.status(500).send("Error") / res.json({message: "Error"})
        render html file: res.render('index') : from view file, need view engine for working (npm i ejs)
        render html file with plus data: res.render('index', {text: "World"}) : can be accessed in views ejs (html) : example in index.html
    })
*/

const userRouter = require('./routes/users')

app.use('/users',userRouter)

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

app.listen(process.env.MAIN_PORT, () => { // Start backend
  console.log(`Server started on port ${process.env.MAIN_PORT}`)
})