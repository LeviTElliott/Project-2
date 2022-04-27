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

const post = mongoose.model('Post', postSchema);
module.exports = post; 

// we will access the array data through our 'database'
// without our module.exports we would not be able to access data from this file