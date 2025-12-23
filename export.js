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



