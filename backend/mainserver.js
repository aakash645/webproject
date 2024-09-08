const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.port || 5000; // Port for the backend server

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection URL
const mongoDBURL =  'mongodb+srv://akashmishra:Aakash123@cluster0.w7b2r.mongodb.net/forms'; // Replace with your MongoDB URL and database name

// Connect to MongoDB
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model for the form data
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    msg: String
});

const FormData = mongoose.model('FormData', formSchema);

// Handle form submissions
app.post('/submit', async (req, res) => {
    try {
        const formData = new FormData({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            msg: req.body.msg
        });

        await formData.save();
        res.status(200).json({ msg: 'Form data submitted successfully' }); // Updated response property
    } catch (error) {
        console.error('Error submitting form data:', error);
        res.status(500).json({ msg: 'Internal Server Error' }); // Updated response property
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
