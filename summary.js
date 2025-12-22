function setSummary(text) {
  resumeData.summary = text;
}

function getSummary() {
  return resumeData.summary;
}
function exportToText() {
  let output = '';
  
 
  if (resumeData.personal.name) {
    output += `${resumeData.personal.name.toUpperCase()}\n`;
    output += '='.repeat(50) + '\n\n';
  }
  
  
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
  }
  if (resumeData.summary) {
    output += 'PROFESSIONAL SUMMARY\n';
    output += '-'.repeat(50) + '\n';
    output += `${resumeData.summary}\n\n`;
  }
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
      
      if (exp.bullets.length > 0) {
        exp.bullets.forEach(bullet => {
          output += `• ${bullet}\n`;
        });
      }
    });
    output += '\n';
  } 