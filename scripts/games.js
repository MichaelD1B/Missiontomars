function toggleSection(section) {
    const sectionButtons = document.querySelector(`.${section}-buttons`);
    const allSections = ['details', 'entertainment'];
  
    // Verberg alle secties
    allSections.forEach(sec => {
      if (sec !== section) {
        document.querySelector(`.${sec}-buttons`).style.display = 'none';
      }
    });
  
    // Wissel de zichtbaarheid van de huidige sectie
    sectionButtons.style.display = sectionButtons.style.display === 'flex' ? 'none' : 'flex';
  }
  