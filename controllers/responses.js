const express = require('express'); 
const router = express.Router(); 
const Response = require('../models/response.js'); 

// Index
router.get('/', (req, res) => {
    // Use Response model to get all Responses
    Response.find({}, (error, allResponses) => {
        error ? res.status(404).json(error) : res.status(200).json(allResponses);
    });
});

// New - this route covered via React front end

// Delete 
router.delete('/:id', (req, res) => {
    // Delete Response from collection
    Response.findByIdAndDelete(req.params.id, (error, response) => {
        error ? res.status(404).json(error) : res.status(200).json(response);
    });
});

// Update
router.put('/:id', (req, res) => {
    // Update Response using Response model
    Response.findByIdAndUpdate(req.params.id, req.body, {
        new: true }, (error, updatedResponse) => {
            error ? res.status(404).json(error) : res.status(200).json(updatedResponse);
    });
});

// Create
router.post('/', (req, res) => {
    console.log(req.body);
    // Use Model to create Response document
    Response.create(req.body, (error, createdResponse) => {
        error ? res.status(404).json(error) :
        res.status(200).json(createdResponse)
    });
});

// Edit - this route covered via React front end

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Response.findById(req.params.id, (error, foundResponse) => {
        // render the Show route and pass it the foundResponse
        error ? res.status(404).json(error) : res.status(200).json(foundResponse);
    });
});

// export router
module.exports = router; 