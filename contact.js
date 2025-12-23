const contactParts = [];
  if (resumeData.personal.email) contactParts.push(resumeData.personal.email);
  if (resumeData.personal.phone) contactParts.push(resumeData.personal.phone);
  if (resumeData.personal.location) contactParts.push(resumeData.personal.location);
  
  html += contactParts.join(' | ');
  html += `</div>`;
  