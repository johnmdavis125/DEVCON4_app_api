const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

// Create Schema
const ResponseSchema = new Schema(
    {
        userName: {type: String, required: true},
        userImage: {type: String, required: true},
        category: {type: String, required: true},
        body: {type: String, required: true}
        // All media types
        // ID of question responding to
    }
)

// Create Model
const Response = mongoose.model('Response', ResponseSchema); 

// Export Question Model
module.exports = Response;