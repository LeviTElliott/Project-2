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

// mongoose.model(<mongodb collection name>, our schema)
const post = mongoose.model('Post', postSchema);

module.exports = post;

// we will access the array data through our 'database'
// without our module.exports we would not be able to access data from this file