const AppState = {
    experienceCount: 0,
    educationCount: 0,
    
    incrementExperience() {
         console.log('Getting experience count:', this.experienceCount); 
        return this.experienceCount++;
    
    },
    
    incrementEducation() {
        console.log('Incrementing education count from:', this.educationCount);
        return this.educationCount++;
    },
    
    getExperienceCount() {
         console.log('Getting experience count:', this.experienceCount); 
        return this.experienceCount;
       
    },
    
    getEducationCount() {
      console.log('Getting education count:', this.educationCount);
        return this.educationCount;
    }
};

