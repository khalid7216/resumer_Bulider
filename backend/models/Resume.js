const mongoose = require('mongoose');

// Experience Sub-Schema
const experienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Company name is required'],
        trim: true
    },
    position: {
        type: String,
        required: [true, 'Position is required'],
        trim: true
    },
    duration: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
}, { _id: false });

// Education Sub-Schema
const educationSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: [true, 'Institution name is required'],
        trim: true
    },
    degree: {
        type: String,
        required: [true, 'Degree is required'],
        trim: true
    },
    year: {
        type: String,
        trim: true
    },
    details: {
        type: String,
        trim: true
    }
}, { _id: false });

// Main Resume Schema
const resumeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    phone: {
        type: String,
        trim: true,
        maxlength: [20, 'Phone number cannot exceed 20 characters']
    },
    location: {
        type: String,
        trim: true,
        maxlength: [100, 'Location cannot exceed 100 characters']
    },
    linkedin: {
        type: String,
        trim: true
    },
    github: {
        type: String,
        trim: true
    },
    summary: {
        type: String,
        trim: true,
        maxlength: [1000, 'Summary cannot exceed 1000 characters']
    },
    experience: {
        type: [experienceSchema],
        default: []
    },
    education: {
        type: [educationSchema],
        default: []
    },
    skills: {
        type: String,
        trim: true,
        maxlength: [500, 'Skills cannot exceed 500 characters']
    },
    version: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true  // Automatically adds createdAt and updatedAt
});

// Index for faster queries
resumeSchema.index({ fullName: 1, email: 1 });

// Virtual for formatted date
resumeSchema.virtual('formattedDate').get(function() {
    return this.createdAt.toLocaleDateString();
});

// Method to increment version
resumeSchema.methods.incrementVersion = function() {
    this.version += 1;
    return this.save();
};

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
