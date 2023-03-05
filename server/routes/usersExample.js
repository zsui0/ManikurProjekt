const express = require('express')
const router = express.Router() 

router.use(logger) // all users route will use logger

router.get('/', (req, res) => { // '/users'
  console.log(req.query.name) // appurl/users?name=Kyle
  res.send("User List")
})

router.get('/new', (req, res) => {  // '/users/new'
  res.render("users/new", {firstName: 'Test'})
})

router.post('/', (req, res) => {
  const isValid = true
  if(isValid) {
    users.push({ firstName: req.body.firstName })
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log("Error")
    res.render('users/new', { firstName: req.body.firstName })
  }
  // req.body.firstName <- html input name, you need a middleware to access it
  res.send('Hi')
})

router
  .route("/:id")
  .get((req, res) => { 
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
  })
  .put((req, res) => { 
    res.send(`Update User With ID ${req.params.id}`)
  })
  .delete((req, res) => { 
    res.send(`Delete User With ID ${req.params.id}`)
  })

const users = [{name: "Kyle"}, {name: "Sally"}]
router.param("id", (req, res, next ,id) => { // it's a middleware : it will run every time when it finds a paramater called
  // middlewares : runs code between front-end request and back-end 
  req.user = users[id]
  next() // continue code : if not used page will load forever
})
  
/*
    -shorter example above for this code-
    router.get('/:id', (req, res) => { // important the order of routes
        // :id == req.params.id | :same req.params.same
        res.send(`Get User With ID ${req.params.id}`)
    })
    router.put('/:id', (req, res) => { 
        // :id == req.params.id | :same req.params.same
        res.send(`Update User With ID ${req.params.id}`)
    })
    router.delete('/:id', (req, res) => { 
        res.send(`Delete User With ID ${req.params.id}`)
    })
    -end-
*/

function logger(req, res, next){ // middleware logger
  console.log(req.originalUrl)
  next()
}

module.exports = router