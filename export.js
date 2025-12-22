function exportToHTML() {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${resumeData.personal.name || 'Resume'}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Arial', sans-serif; 
      line-height: 1.6; 
      color: #333; 
      max-width: 850px; 
      margin: 0 auto; 
      padding: 40px 20px; 
    }
    h1 { font-size: 32px; margin-bottom: 10px; color: #2c3e50; }
    h2 { 
      font-size: 20px; 
      color: #2c3e50; 
      border-bottom: 2px solid #3498db; 
      padding-bottom: 5px; 
      margin: 25px 0 15px; 
    }
    .contact { margin-bottom: 20px; color: #555; }
    .section { margin-bottom: 20px; }
    .job { margin-bottom: 20px; }
    .job-title { font-weight: bold; font-size: 18px; color: #2c3e50; }
    .company { color: #555; font-style: italic; }
    .date { color: #777; font-size: 14px; }
    .edu-item { margin-bottom: 15px; }
    .edu-title { font-weight: bold; font-size: 16px; color: #2c3e50; }
    .school { color: #555; font-style: italic; }
    ul { margin-left: 20px; margin-top: 8px; }
    li { margin-bottom: 5px; }
    .skills { display: flex; flex-wrap: wrap; gap: 10px; }
    .skill-tag { 
      background: #ecf0f1; 
      padding: 5px 15px; 
      border-radius: 15px; 
      font-size: 14px; 
    }
    @media print {
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <header>
    <h1>${resumeData.personal.name || 'Your Name'}</h1>
    <div class="contact">`;
  
  const contactParts = [];
  if (resumeData.personal.email) contactParts.push(resumeData.personal.email);
  if (resumeData.personal.phone) contactParts.push(resumeData.personal.phone);
  if (resumeData.personal.location) contactParts.push(resumeData.personal.location);
  
  html += contactParts.join(' | ');
  
  if (resumeData.personal.linkedin) {
    html += `<br><a href="${resumeData.personal.linkedin}" target="_blank">LinkedIn</a>`;
  }
  if (resumeData.personal.portfolio) {
    html += ` | <a href="${resumeData.personal.portfolio}" target="_blank">Portfolio</a>`;
  }
  
  html += `</div>
  </header>`;
  
  // Summary
  if (resumeData.summary) {
    html += `
  <section class="section">
    <h2>Professional Summary</h2>
    <p>${resumeData.summary}</p>
  </section>`;
  }
  
  // Experience
  if (resumeData.experience.length > 0) {
    html += `
  <section class="section">
    <h2>Work Experience</h2>`;
    
    resumeData.experience.forEach(exp => {
      html += `
    <div class="job">
      <div class="job-title">${exp.jobTitle}</div>
      <div class="company">${exp.company}${exp.location ? ' | ' + exp.location : ''}</div>
      <div class="date">${exp.startDate} - ${exp.endDate || 'Present'}</div>`;
      
      if (exp.bullets && exp.bullets.length > 0) {
        html += `<ul>`;
        exp.bullets.forEach(bullet => {
          html += `<li>${bullet}</li>`;
        });
        html += `</ul>`;
      }
      
      html += `</div>`;
    });
    
    html += `</section>`;
  }
  
  // Education
  if (resumeData.education.length > 0) {
    html += `
  <section class="section">
    <h2>Education</h2>`;
    
    resumeData.education.forEach(edu => {
      html += `
    <div class="edu-item">
      <div class="edu-title">${edu.degree}</div>
      <div class="school">${edu.school}</div>
      <div class="date">${edu.year}${edu.gpa ? ' | GPA: ' + edu.gpa : ''}</div>
      ${edu.description ? '<p>' + edu.description + '</p>' : ''}
    </div>`;
    });
    
    html += `</section>`;
  }
  
  // Skills
  if (resumeData.skills.length > 0) {
    html += `
  <section class="section">
    <h2>Skills</h2>
    <div class="skills">`;
    
    resumeData.skills.forEach(skill => {
      html += `<span class="skill-tag">${skill}</span>`;
    });
    
    html += `</div>
  </section>`;
  }
  
  // Certifications
  if (resumeData.certifications.length > 0) {
    html += `
  <section class="section">
    <h2>Certifications</h2>
    <ul>`;
    
    resumeData.certifications.forEach(cert => {
      html += `<li>${cert.name}${cert.issuer ? ' - ' + cert.issuer : ''}${cert.date ? ' (' + cert.date + ')' : ''}</li>`;
    });
    
    html += `</ul>
  </section>`;
  }
  
  // Languages
  if (resumeData.languages.length > 0) {
    html += `
  <section class="section">
    <h2>Languages</h2>
    <ul>`;
    
    resumeData.languages.forEach(lang => {
      html += `<li>${lang.language}${lang.proficiency ? ' - ' + lang.proficiency : ''}</li>`;
    });
    
    html += `</ul>
  </section>`;
  }
  
  html += `
</body>
</html>`;
  
  return html;
}

// Export to Plain Text
function exportToText() {
  let output = '';
  
  // Personal Info
  if (resumeData.personal.name) {
    output += `${resumeData.personal.name.toUpperCase()}\n`;
    output += '='.repeat(50) + '\n\n';
  }
  
  // Contact
  const contact = [];
  if (resumeData.personal.email) contact.push(resumeData.personal.email);
  if (resumeData.personal.phone) contact.push(resumeData.personal.phone);
  if (resumeData.personal.location) contact.push(resumeData.personal.location);
  
  if (contact.length > 0) {
    output += contact.join(' | ') + '\n';
  }
  
  if (resumeData.personal.linkedin) output += `LinkedIn: ${resumeData.personal.linkedin}\n`;
  if (resumeData.personal.portfolio) output += `Portfolio: ${resumeData.personal.portfolio}\n`;
  
  output += '\n';
  
  // Summary
  if (resumeData.summary) {
    output += 'PROFESSIONAL SUMMARY\n';
    output += '-'.repeat(50) + '\n';
    output += `${resumeData.summary}\n\n`;
  }
  
  // Experience
  if (resumeData.experience.length > 0) {
    output += 'WORK EXPERIENCE\n';
    output += '-'.repeat(50) + '\n';
    
    resumeData.experience.forEach(exp => {
      output += `\n${exp.jobTitle}`;
      if (exp.company) output += ` | ${exp.company}`;
      output += '\n';
      
      if (exp.location || exp.startDate) {
        const details = [];
        if (exp.location) details.push(exp.location);
        if (exp.startDate) details.push(`${exp.startDate} - ${exp.endDate || 'Present'}`);
        output += details.join(' | ') + '\n';
      }
      
      if (exp.bullets && exp.bullets.length > 0) {
        exp.bullets.forEach(bullet => {
          output += `• ${bullet}\n`;
        });
      }
    });
    output += '\n';
  }
  
  // Education
  if (resumeData.education.length > 0) {
    output += 'EDUCATION\n';
    output += '-'.repeat(50) + '\n';
    
    resumeData.education.forEach(edu => {
      output += `\n${edu.degree}`;
      if (edu.school) output += ` | ${edu.school}`;
      output += '\n';
      
      if (edu.year) output += `${edu.year}`;
      if (edu.gpa) output += ` | GPA: ${edu.gpa}`;
      if (edu.year || edu.gpa) output += '\n';
      
      if (edu.description) output += `${edu.description}\n`;
    });
    output += '\n';
  }
  
  // Skills
  if (resumeData.skills.length > 0) {
    output += 'SKILLS\n';
    output += '-'.repeat(50) + '\n';
    output += resumeData.skills.join(' • ') + '\n\n';
  }
  
  // Certifications
  if (resumeData.certifications.length > 0) {
    output += 'CERTIFICATIONS\n';
    output += '-'.repeat(50) + '\n';
    resumeData.certifications.forEach(cert => {
      output += `• ${cert.name}${cert.issuer ? ' - ' + cert.issuer : ''}${cert.date ? ' (' + cert.date + ')' : ''}\n`;
    });
    output += '\n';
  }
  
  // Languages
  if (resumeData.languages.length > 0) {
    output += 'LANGUAGES\n';
    output += '-'.repeat(50) + '\n';
    resumeData.languages.forEach(lang => {
      output += `• ${lang.language}${lang.proficiency ? ' - ' + lang.proficiency : ''}\n`;
    });
    output += '\n';
  }
  
  return output;
}

// Download Functions
function downloadAsHTML() {
  const content = exportToHTML();
  const blob = new Blob([content], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  const fileName = resumeData.personal.name 
    ? resumeData.personal.name.replace(/\s+/g, '_') 
    : 'Resume';
  a.download = `${fileName}_Resume.html`;
  a.click();
  
  URL.revokeObjectURL(url);
}

function downloadAsText() {
  const content = exportToText();
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  const fileName = resumeData.personal.name 
    ? resumeData.personal.name.replace(/\s+/g, '_') 
    : 'Resume';
  a.download = `${fileName}_Resume.txt`;
  a.click();
  
  URL.revokeObjectURL(url);
}

// Clear Data
function clearAllData() {
  resumeData.personal = {
    name: '', email: '', phone: '', location: '', linkedin: '', portfolio: ''
  };
  resumeData.summary = '';
  resumeData.experience = [];
  resumeData.education = [];
  resumeData.skills = [];
  resumeData.certifications = [];
  resumeData.languages = [];
  
  // Clear form inputs
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('location').value = '';
  document.getElementById('summary').value = '';
  document.getElementById('jobTitle').value = '';
  document.getElementById('company').value = '';
  document.getElementById('bullets').value = '';
  document.getElementById('skills').value = '';
  document.getElementById('education').value = '';
  
  // Clear preview
  document.getElementById('preview').innerHTML = '<p style="color: #999;">Preview will appear here...</p>';
}

// UI Functions
function generateResume() {
  // Clear previous data
  resumeData.experience = [];
  resumeData.education = [];
  resumeData.skills = [];
  
  // Get form values
  setPersonalInfo('name', document.getElementById('name').value);
  setPersonalInfo('email', document.getElementById('email').value);
  setPersonalInfo('phone', document.getElementById('phone').value);
  setPersonalInfo('location', document.getElementById('location').value);
  
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
  
  alert('✅ Resume generated! Scroll down to see preview.');
}

function downloadResume() {
  if (!resumeData.personal.name) {
    alert('⚠️ Please generate resume first!');
    return;
  }
  downloadAsHTML();
  alert('✅ Resume downloaded as HTML!');
}

function downloadText() {
  if (!resumeData.personal.name) {
    alert('⚠️ Please generate resume first!');
    return;
  }
  downloadAsText();
  alert('✅ Resume downloaded as Text!');
}