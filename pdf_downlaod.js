function downloadAsPDF() {
  if (!resumeData.personal.name) {
    alert(' Please generate resume first!');
    return;
  }
  
  const content = exportToHTML();
  const printWindow = window.open('', '_blank');
  printWindow.document.write(content);
  printWindow.document.close();
  
  setTimeout(() => {
    printWindow.print();
    alert(' Please use "Save as PDF" option in the print dialog!');
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