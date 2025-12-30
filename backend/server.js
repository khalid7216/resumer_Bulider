const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/resumes', require('./routes/resume'));

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Resume Builder API',
        version: '1.0.0',
        endpoints: {
            resumes: '/api/v1/resumes'
        }
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('═══════════════════════════════════');
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 http://localhost:${PORT}`);
    console.log('═══════════════════════════════════');
});