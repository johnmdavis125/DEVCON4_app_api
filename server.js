require('dotenv').config()
const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const db = mongoose.connection; 
const path = require('path'); 
const cors = require('cors'); 
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

db.on('open', ()=>{
    console.log('DEVCON4 is connected to Mongo')
});

// Middleware //
app.use(cors());
app.use(express.json());

// Cxn Test
app.get('/', (req, res)=>{
    res.send('Back is connected')
});

// hook up controller(s)


// Listener
app.listen(PORT, ()=>{
    console.log('DEVCON4 backend is awake and listening', PORT)
});