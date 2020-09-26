const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

// Create Schema
const QuestionSchema = new Schema(
    {
        userName: {type: String, required: true},
        userImage: {type: String, required: true},
        category: {type: String, required: true},
        topic: {type: String, required: true},
        body: {type: String, required: true}
    }
)

// Create Model
const Question = mongoose.model('Question', QuestionSchema); 

// Export Question Model
module.exports = Question;