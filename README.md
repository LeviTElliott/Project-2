Welcome to Our Project 2!

# Project 2 - Three Features of Social Media

## Project Description 
This is a social media platform where a user can login by their email address and password. The user will be able to post and will be able click and see the other users posts.

## User
- As a user, I want to be able to create an account with my email and password.
- As a user, I want to ba able to log-in with those criteria.
- As a user, I want to be able to post content from my user account.
- As a user, I want to be able to like interact with posts from other user accounts.


## MVP
- Create "dummy" user accounts with custom criteria.
- CSS styling.
- Create a kickback to the client if information input is inacurate for log-in.
- Create a forum for client-side posts from different accounts.
- Create methods for users to interact with another users post. (like button)

## Stretch goal
- Create a comment section on the users-post forum.
- Scaleable interface so various window sizes are acommodated
- Client-side delete button for "regrettable" posts.

## Division of labor
### Argeline: 
- Schemas 
- CSS
- Index construction

### Levi:
- Server.js
- File structure/branching
- Formatting for ejs files
- Building databases
- File submission

## WireFrame
Wireframes and models can be found in the images folder in the files:

![wireframe 2 1](https://user-images.githubusercontent.com/101364797/165627786-1f231b37-2be4-47b6-aefc-75fe93c6d676.png)

![wireframe 2 2](https://user-images.githubusercontent.com/101364797/165627796-602281dc-2a38-43d5-8707-9ded1340e529.png)


## Technologies
- CSS
- JavaScript
- HTML
- Node.js
- Mongoose
- Mongo

## Mdels/Code Snippet
Code snippet from early schema model:
const mongoose = require('mongoose');

```const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty:']
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
    },```
