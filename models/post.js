const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post: {
        type: String,
        required: [true, 'posts cannot be empty:']
    },
    hostPage: {
        type: String,
        required: [true, 'Show a link to your page!']
    },
    comments: {
        type: String,
    }
});
// mongoose.model(<mongodb collection name>, our schema)

const posts = mongoose.model('posts', postSchema);
module.exports = posts; 

// we will access the array data through our 'database'
// without our module.exports we would not be able to access data from this file