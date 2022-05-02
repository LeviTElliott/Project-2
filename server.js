const express = require('express');
const app = express();
const PORT = 4100;
const users = require('./models/user.js');
const postUp = require('./models/post.js');
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
    Image: req.body.image,
    location:req.body.location,
    date:req.body.date,
}
  parks.push(req.body)
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
    parks[req.params.id] = req.body
    res.redirect(`/users/${req.params.id}`)
  })

  // SHOW ROUTE
app.post('/postUp/:id', (req, res) => {
  let postId = req.params.id;
  const context = {
    onePost: posts[postId],
    message: 'Create a Post Here!',
    id: postId,
  };
  res.render('show.ejs', context);
});
  
  // // DELETE ROUTE
  // app.delete('/users/:id', (req, res) => {
  //   users.splice(req.params.id,1);
  //   res.redirect('/users');
  // })



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});