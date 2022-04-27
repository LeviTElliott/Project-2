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
Wireframes and models can be found in the images folder in the files:




## Technologies
css
javascript
HTML

## models/code snippet
code snippet from early schema model:
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty :(']
    },
    email {
        type: string,
        required: [true, 'email cannot appear empyty']
    },
    password {
        type: string,
        required: [true, 'password cannot be empty']
    },
    profile picture {
        type: img,
    }
    post: {
        type: string,
    },  
},
    {
        timestamps: true
    } 
);


const postSchema = new mongoose.Schema({
    post: {
        type: String,
        required: [true, 'posts cannot be empty :(']
    },
    hostPage {
        type: string,
        required: [true, 'Show a link to your page!']
    },
    comments {
        type: string,
    },