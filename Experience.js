function getAllExperience() {
  return resumeData.experience;
}

function AddBullPoint(expId, bulletsText) {
  const exp = resumeData.experience.find(e => e.id === expId);
  if (exp) {
    exp.bullets.push(bulletsText);
    return true;
  }
  return false;
}

function UpdateBullet(expID, bulletIndex, NewText) {
  const exp = resumeData.experience.find(e => e.id === expID);
  if (exp && exp.bullets[bulletIndex] !== undefined) {
    exp.bullets[bulletIndex] = NewText;
    return true;
  }
  return false;
}

function DeleteBullet(expId, bulletIndex) {
  const exp = resumeData.experience.find(e => e.id === expId);
  if (exp && exp.bullets[bulletIndex] !== undefined) {
    exp.bullets.splice(bulletIndex, 1);
    return true;
  }
  return false;
}

function addEducation(degree, school, year, gpa, description) {
  const newEdu = {
    id: Date.now(),
    degree: degree || '',
    school: school || '',
    year: year || '',
    gpa: gpa || '',
    description: description || ''
  };
  
  resumeData.education.push(newEdu);
  return newEdu;
}

function updateEducation(id, field, value) {
  const edu = resumeData.education.find(e => e.id === id);
  if (edu && edu.hasOwnProperty(field)) {
    edu[field] = value;
    return true;
  }
  return false;
}

function deleteEducation(id) {
  const index = resumeData.education.findIndex(e => e.id === id);
  if (index > -1) {
    resumeData.education.splice(index, 1);
    return true;
  }
  return false;
}

function getAllEducation() {
  return resumeData.education;
}