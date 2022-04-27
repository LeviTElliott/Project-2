const mongoose = require('mongoose');
const post = mongoose.model('Post', postSchema);

const postSchema = new mongoose.Schema({
    post: {
        type: String,
        required: [true, 'posts cannot be empty :(']
    },
    hostPage: {
        type: string,
        required: [true, 'Show a link to your page!']
    },
    comments: {
        type: string,
    }
}),
// mongoose.model(<mongodb collection name>, our schema)

module.exports = post

// we will access the array data through our 'database'
// without our module.exports we would not be able to access data from this file