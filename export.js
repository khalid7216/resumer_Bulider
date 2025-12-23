function exportToHTML() {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${resumeData.personal.name || 'Resume'}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
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
    .contact { margin-bottom: 10px; color: #555; }
    .social-links {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 20px;
    }
    .social-link {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      color: #3498db;
      text-decoration: none;
      font-size: 14px;
    }
    .social-link:hover {
      text-decoration: underline;
    }
    .social-link i {
      font-size: 16px;
    }
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
      .social-link { color: #3498db !important; }
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
  html += `</div>`;
  
  // Social Links
  const socialLinks = [];
  if (resumeData.personal.linkedin) {
    socialLinks.push(`<a href="${resumeData.personal.linkedin}" target="_blank" class="social-link"><i class="fab fa-linkedin"></i> LinkedIn</a>`);
  }
  if (resumeData.personal.github) {
    socialLinks.push(`<a href="${resumeData.personal.github}" target="_blank" class="social-link"><i class="fab fa-github"></i> GitHub</a>`);
  }
  if (resumeData.personal.behance) {
    socialLinks.push(`<a href="${resumeData.personal.behance}" target="_blank" class="social-link"><i class="fab fa-behance"></i> Behance</a>`);
  }
  if (resumeData.personal.linktree) {
    socialLinks.push(`<a href="${resumeData.personal.linktree}" target="_blank" class="social-link"><i class="fas fa-link"></i> Linktree</a>`);
  }
  if (resumeData.personal.portfolio) {
    socialLinks.push(`<a href="${resumeData.personal.portfolio}" target="_blank" class="social-link"><i class="fas fa-globe"></i> Portfolio</a>`);
  }
  
  if (socialLinks.length > 0) {
    html += `<div class="social-links">` + socialLinks.join('') + `</div>`;
  }
  
  html += `</header>`;
  
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

// Download as PDF using print functionality
function downloadAsPDF() {
  if (!resumeData.personal.name) {
    alert('⚠️ Please generate resume first!');
    return;
  }
  
  const content = exportToHTML();
  const printWindow = window.open('', '_blank');
  printWindow.document.write(content);
  printWindow.document.close();
  
  setTimeout(() => {
    printWindow.print();
    alert('✅ Please use "Save as PDF" option in the print dialog!');
  }, 250);
}

// Clear Data
function clearAllData() {
  resumeData.personal = {
    name: '', email: '', phone: '', location: '', linkedin: '', portfolio: '', 
    github: '', behance: '', linktree: ''
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
  document.getElementById('linkedin').value = '';
  document.getElementById('github').value = '';
  document.getElementById('behance').value = '';
  document.getElementById('linktree').value = '';
  document.getElementById('portfolio').value = '';
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
  
  alert('✅ Resume generated! Scroll down to see preview.');
}