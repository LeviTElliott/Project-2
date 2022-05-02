const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connectionStr = process.env.MONGODB_URL
mongoose.connect(connectionStr);
mongoose.connection.on('connected' , () => {
  console.log('connected')
});
mongoose.connection.on ('error', (error) => {
  console.log(`Error! ${error}`);
});
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected')
});
const app = express();
const PORT = 4100;
const users = require('./models/user.js');
const posts = require('./models/post.js');
// const methodOverride = require('method-override');

//==============================================
//                   Middleware
//==============================================
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true }));

// app.use(methodOverride('_method'))

//==============================================
//                    ROUTES 
//==============================================


// INDEX ROUTE
app.get('/users', (req, res) => {
  const context = { users: users};
  res.render('index.ejs', context)
});

// NEW ROUTE
app.get('/users/new', (req, res)=>{
  res.render('new.ejs')
})

//POST ROUTE
app.post('/users', (req, res) => {
  let value = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
}
  users.push(req.body)
  res.redirect('/users')
})

// EDIT ROUTE
app.get('/users/:id/edit', (req, res) => {
  let foundUser = users[req.params.id]
  const context = {
    users: foundUser,
    id: req.params.id
  }
  console.log(foundUser, req.body)
  res.render('edit.ejs', context)
});
  
  //PUT ROUTE
  app.put('/users/:id', (req, res) =>{
    console.log('test')
    users[req.params.id] = req.body
    res.redirect(`/users/${req.params.id}`)
  })

  // SHOW ROUTE
app.get('/posts/:id', (req, res) => {
  let postId = req.params.id;
  const context = {
    onePost: posts[postId],
    message: 'Create a Post Here!',
    id: postId,
  };
  res.render('show.ejs', context);
});

//POST ROUTE2
app.post('/posts', (req, res) => {
  let value = {
    post: req.body.post,
    hostPage: req.body.hostPage,
    comments: req.body.comments,
}
  posts.push(req.body)
  res.redirect('/posts')
});
  
  // // DELETE ROUTE
  // app.delete('/users/:id', (req, res) => {
  //   users.splice(req.params.id,1);
  //   res.redirect('/users');
  // })

  app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});