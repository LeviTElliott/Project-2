Welcome to Our Project 2!

## Project Description 


## User
- As a user, I want to be able to create an account with my email and password.
- As a user, I want to ba able to log-in with those criteria.
- As a user, I want to be able to post content from my user account.
- As a user, I want to be able to like interact with posts from other user accounts.


## MVP
- Create user accounts with custom criteria.
- css styling.
- Create a kickback to the client if information input is inacurate for log-in.
- Create a forum for client-side posts from different accounts.
- Create methods for users to interact with another users post. (like button)

## stretch goal
- create a comment section on the users-post forum.
- scaleable interface so various window sizes are acommodated
- client-side delete button for "regrettable" posts.

## division of labor


## WireFram
https://www.figma.com/file/vL5xXLBaGB2y9GPo0SnBsu/Untitled?node-id=0%3A1



## Technologies
css
javascript
HTML

## models
code snippet from early schema model:
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty :(']
    },
    post: {
        type: Number,
        required: [true, 'post cannot be empty!']
    },  
},
    {
        timestamps: true
    } 
);