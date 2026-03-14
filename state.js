const AppState = {
    experienceCount: 0,
    educationCount: 0,
    projectCount: 0,

    incrementExperience() {
        return this.experienceCount++;
    },

    incrementEducation() {
        return this.educationCount++;
    },

    incrementProject() {
        return this.projectCount++;
    },

    getExperienceCount() {
        return this.experienceCount;
    },

    getEducationCount() {
        return this.educationCount;
    },

    getProjectCount() {
        return this.projectCount;
    }
};
