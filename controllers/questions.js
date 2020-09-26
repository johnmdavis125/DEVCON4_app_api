const express = require('express'); 
const router = express.Router(); 
const Question = require('../models/question.js'); 

// Index
router.get('/', (req, res) => {
    // Use Question model to get all Questions
    Question.find({}, (error, allQuestions) => {
        error ? res.status(404).json(error) : res.status(200).json(allQuestions);
    });
});

// New - this route covered via React front end

// Delete 
router.delete('/:id', (req, res) => {
    // Delete question from collection
    Question.findByIdAndDelete(req.params.id, (error, question) => {
        error ? res.status(404).json(error) : res.status(200).json(question);
    });
});

// Update
router.put('/:id', (req, res) => {
    // Update question using question model
    Question.findByIdAndUpdate(req.params.id, req.body, {
        new: true }, (error, updatedQuestion) => {
            error ? res.status(404).json(error) : res.status(200).json(updatedQuestion);
    });
});

// Create
router.post('/', (req, res) => {
    console.log(req.body);
    // Use Model to create question document
    Question.create(req.body, (error, createdQuestion) => {
        error ? res.status(404).json(error) :
        res.status(200).json(createdQuestion)
    });
});

// Edit - this route covered via React front end

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Question.findById(req.params.id, (error, foundQuestion) => {
        // render the Show route and pass it the foundQuestion
        error ? res.status(404).json(error) : res.status(200).json(foundQuestion);
    });
});

// export router
module.exports = router; 