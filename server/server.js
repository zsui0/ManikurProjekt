const express = require('express')
const app = express()

app.use(express.static("public")) // automatically use public folder files for static page rendering, you can access/open files in http line : 'apiHttp'/test/test.html
app.use(express.urlencoded({ extended: true })) // allow access information coming from Forms
app.use(express.json()) // same as urlencoded just with json


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

app.user('/users',userRouter)

function logger(req, res, next){ // middleware logger
  console.log(req.originalUrl)
  next()
}

app.listen(5000)