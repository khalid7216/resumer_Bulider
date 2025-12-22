function addSkill(skill) {
  if (skill && !resumeData.skills.includes(skill)) {
    resumeData.skills.push(skill);
    return true;
  }
  return false;
}

function removeSkill(skill) {
  const index = resumeData.skills.indexOf(skill);
  if (index > -1) {
    resumeData.skills.splice(index, 1);
    return true;
  }
  return false;
}

function updateSkill(oldSkill, newSkill) {
  const index = resumeData.skills.indexOf(oldSkill);
  if (index > -1) {
    resumeData.skills[index] = newSkill;
    return true;
  }
  return false;
}

function getAllSkills() {
  return resumeData.skills;
}
function addCertification(name, issuer, date) {
  const cert = {
    id: Date.now(),
    name: name || '',
    issuer: issuer || '',
    date: date || ''
  };
  
  resumeData.certifications.push(cert);
  return cert;
}

function deleteCertification(id) {
  const index = resumeData.certifications.findIndex(c => c.id === id);
  if (index > -1) {
    resumeData.certifications.splice(index, 1);
    return true;
  }
  return false;
}
function addLanguage(language, proficiency) {
  const lang = {
    id: Date.now(),
    language: language || '',
    proficiency: proficiency || ''
  };
  resumeData.languages.push(lang);
  return lang;
}
function deleteLanguage(id) {
  const index = resumeData.languages.findIndex(l => l.id === id);
  if (index > -1) {
    resumeData.languages.splice(index, 1);
    return true;
  }
  return false;
}
