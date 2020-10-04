const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

// Create Schema
const ResponseSchema = new Schema(
    {
        userName: {type: String, required: true},
        userImage: {type: String, required: true},
        category: {type: String, required: true},
        qid: {type: String, required: true},
        body: {type: String, required: true},
        votes: {type: Number, required: true}
    }
)

// Create Model
const Response = mongoose.model('Response', ResponseSchema); 

// Export Question Model
module.exports = Response;