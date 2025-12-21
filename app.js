
const resumeData = {
  personal: {
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    portfolio: ''
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  certifications: [],
  languages: []
};

// 2. PERSONAL INFO FUNCTIONS
function setPersonalInfo(field, value) {
  if (resumeData.personal.hasOwnProperty(field)) {
    resumeData.personal[field] = value;
    return true;
  }
  return false;
}

function getPersonalInfo() {
  return resumeData.personal;
}

// 3. EXPERIENCE FUNCTIONS
function addExperience(jobTitle, company, location, startDate, endDate, bullets) {
  const newExp = {
    id: Date.now(),
    jobTitle: jobTitle || '',
    company: company || '',
    location: location || '',
    startDate: startDate || '',
    endDate: endDate || '',
    bullets: bullets || []
  };
  
  resumeData.experience.push(newExp);
  return newExp;
}

function updateExperience(id, field, value) {
  const exp = resumeData.experience.find(e => e.id === id);
  if (exp && exp.hasOwnProperty(field)) {
    exp[field] = value;
    return true;
  }
  return false;
}

function deleteExperience(id) {
  const index = resumeData.experience.findIndex(e => e.id === id);
  if (index > -1) {
    resumeData.experience.splice(index, 1);
    return true;
  }
  return false;
}
function getExperience(id) {
  return resumeData.experience.find(e => e.id === id) || null;
}
