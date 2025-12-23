// UI Functions
function generateResume() {
  // Clear previous data
  resumeData.experience = [];
  resumeData.education = [];
  resumeData.skills = [];
  
  // Get form values - Personal Info
  setPersonalInfo('name', document.getElementById('name').value);
  setPersonalInfo('email', document.getElementById('email').value);
  setPersonalInfo('phone', document.getElementById('phone').value);
  setPersonalInfo('location', document.getElementById('location').value);
  
  // Get Social Links
  setPersonalInfo('linkedin', document.getElementById('linkedin').value);
  setPersonalInfo('github', document.getElementById('github').value);
  setPersonalInfo('behance', document.getElementById('behance').value);
  setPersonalInfo('linktree', document.getElementById('linktree').value);
  setPersonalInfo('portfolio', document.getElementById('portfolio').value);
  
  setSummary(document.getElementById('summary').value);
  
  // Add experience
  const jobTitle = document.getElementById('jobTitle').value;
  const company = document.getElementById('company').value;
  const bulletsText = document.getElementById('bullets').value;
  const bullets = bulletsText.split(',').map(b => b.trim()).filter(b => b);
  
  if (jobTitle && company) {
    addExperience(jobTitle, company, 'Karachi', 'Jan 2023', 'Present', bullets);
  }
  
  // Add skills
  const skillsText = document.getElementById('skills').value;
  const skills = skillsText.split(',').map(s => s.trim()).filter(s => s);
  skills.forEach(addSkill);
  
  // Add education
  const eduText = document.getElementById('education').value;
  if (eduText) {
    const parts = eduText.split('|').map(p => p.trim());
    if (parts.length >= 3) {
      addEducation(parts[0], parts[1], parts[2]);
    }
  }
  
  // Show preview
  const preview = document.getElementById('preview');
  preview.innerHTML = exportToHTML();
  
  alert('Resume generated! Scroll down to see preview.');
}