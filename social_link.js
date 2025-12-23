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