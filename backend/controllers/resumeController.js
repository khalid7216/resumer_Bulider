const Resume = require('../models/Resume');

// @desc    Create new resume
// @route   POST /api/resumes
exports.createResume = async (req, res) => {
    try {
        console.log('📝 Creating new resume...');
        const resume = await Resume.create(req.body);
        
        console.log('✅ Resume created:', resume._id);
        res.status(201).json({
            success: true,
            message: 'Resume created successfully',
            data: resume
        });
    } catch (error) {
        console.error('❌ Error creating resume:', error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get all resumes
// @route   GET /api/resumes
exports.getAllResumes = async (req, res) => {
    try {
        console.log('📋 Fetching all resumes...');
        const resumes = await Resume.find().sort({ createdAt: -1 });
        
        console.log(`✅ Found ${resumes.length} resumes`);
        res.status(200).json({
            success: true,
            count: resumes.length,
            data: resumes
        });
    } catch (error) {
        console.error('❌ Error fetching resumes:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get single resume by ID
// @route   GET /api/resumes/:id
exports.getResumeById = async (req, res) => {
    try {
        console.log('🔍 Fetching resume:', req.params.id);
        const resume = await Resume.findById(req.params.id);
        
        if (!resume) {
            return res.status(404).json({
                success: false,
                message: 'Resume not found'
            });
        }
        
        console.log('✅ Resume found:', resume.fullName);
        res.status(200).json({
            success: true,
            data: resume
        });
    } catch (error) {
        console.error('❌ Error fetching resume:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Update resume
// @route   PUT /api/resumes/:id
exports.updateResume = async (req, res) => {
    try {
        console.log('📝 Updating resume:', req.params.id);
        const resume = await Resume.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,  // Return updated document
                runValidators: true  // Run schema validators
            }
        );
        
        if (!resume) {
            return res.status(404).json({
                success: false,
                message: 'Resume not found'
            });
        }
        
        console.log('✅ Resume updated:', resume.fullName);
        res.status(200).json({
            success: true,
            message: 'Resume updated successfully',
            data: resume
        });
    } catch (error) {
        console.error('❌ Error updating resume:', error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Delete resume
// @route   DELETE /api/resumes/:id
exports.deleteResume = async (req, res) => {
    try {
        console.log('🗑️ Deleting resume:', req.params.id);
        const resume = await Resume.findByIdAndDelete(req.params.id);
        
        if (!resume) {
            return res.status(404).json({
                success: false,
                message: 'Resume not found'
            });
        }
        
        console.log('✅ Resume deleted:', resume.fullName);
        res.status(200).json({
            success: true,
            message: 'Resume deleted successfully'
        });
    } catch (error) {
        console.error('❌ Error deleting resume:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};