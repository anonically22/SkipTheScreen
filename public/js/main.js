document.addEventListener('DOMContentLoaded', () => {
    // --- Form Input Elements ---
    // Header
    const headerLayoutRadios = document.querySelectorAll('input[name="headerLayout"]');
    const fullNameInput = document.getElementById('fullName');
    const jobTitleInput = document.getElementById('jobTitle');
    const phoneInput = document.getElementById('phone');
    const locationInput = document.getElementById('location');
    const emailInput = document.getElementById('email');
    const linkedinInput = document.getElementById('linkedin');

    // --- Preview Elements ---
    // Header
    const previewHeaderDiv = document.getElementById('preview-header');
    const previewFullName = document.getElementById('preview-fullName');
    const previewJobTitle = document.getElementById('preview-jobTitle');
    const previewContactInfoDiv = document.getElementById('preview-contactInfo'); // Target the div for class toggling
    const previewPhone = document.getElementById('preview-phone');
    const previewLocation = document.getElementById('preview-location');
    const previewEmail = document.getElementById('preview-email');
    const previewLinkedin = document.getElementById('preview-linkedin');

    // Education Form Elements
    const toggleEducation = document.getElementById('toggle-education');
    const educationFormContent = document.getElementById('education-form-content');
    const educationEntriesContainer = document.getElementById('education-entries'); // Form container for entries
    const addEducationButton = document.getElementById('add-education');

    // Education Preview Elements
    const previewEducationSection = document.getElementById('preview-education-section'); // Main preview section wrapper
    const previewEducationEntriesContainer = document.getElementById('preview-education-entries'); // Preview container for entries


    // --- Default Preview Text ---
    const defaultTexts = {
        fullName: 'Your Name',
        jobTitle: 'Your Job Title',
        phone: 'Your Phone',
        location: 'Your Location',
        email: 'Your Email',
        linkedin: 'Your LinkedIn Profile'
    };

    // --- Update Preview Function ---
    const updatePreview = () => {
        // Header
        if (previewHeaderDiv && headerLayoutRadios && headerLayoutRadios.length > 0) {
            let selectedLayout = 'inline'; // default
            headerLayoutRadios.forEach(radio => {
                if (radio.checked) {
                    selectedLayout = radio.value;
                }
            });
            // Apply class to previewHeaderDiv for CSS to handle stacking of jobTitle & contactInfo
            // And apply to previewContactInfoDiv for specific styling of contact items
            if (selectedLayout === 'stacked') {
                previewHeaderDiv.classList.add('stacked');
                previewHeaderDiv.classList.remove('inline');
                if (previewContactInfoDiv) previewContactInfoDiv.classList.add('stacked'); // For #preview-contactInfo.stacked span CSS
                if (previewContactInfoDiv) previewContactInfoDiv.classList.remove('inline');
            } else {
                previewHeaderDiv.classList.add('inline');
                previewHeaderDiv.classList.remove('stacked');
                if (previewContactInfoDiv) previewContactInfoDiv.classList.add('inline');
                if (previewContactInfoDiv) previewContactInfoDiv.classList.remove('stacked');
            }
        }

        if(previewFullName && fullNameInput) previewFullName.textContent = fullNameInput.value || defaultTexts.fullName;
        if(previewJobTitle && jobTitleInput) previewJobTitle.textContent = jobTitleInput.value || defaultTexts.jobTitle;
        if(previewPhone && phoneInput) previewPhone.textContent = phoneInput.value || defaultTexts.phone;
        if(previewLocation && locationInput) previewLocation.textContent = locationInput.value || defaultTexts.location;
        if(previewEmail && emailInput) previewEmail.textContent = emailInput.value || defaultTexts.email;
        if(previewLinkedin && linkedinInput) previewLinkedin.textContent = linkedinInput.value || defaultTexts.linkedin;

        // Education Preview Logic
        if (previewEducationSection && educationFormContent && educationEntriesContainer && previewEducationEntriesContainer) {
            if (toggleEducation && toggleEducation.checked) {
                previewEducationSection.style.display = '';
                previewEducationEntriesContainer.innerHTML = ''; // Clear previous entries

                const educationForms = educationEntriesContainer.querySelectorAll('.education-entry');
                let hasEducationContent = false;
                educationForms.forEach(form => {
                    const institution = form.querySelector('.institution')?.value;
                    const eduLocation = form.querySelector('.eduLocation')?.value;
                    const degree = form.querySelector('.degree')?.value;
                    const cgpa = form.querySelector('.cgpa')?.value;
                    const coursework = form.querySelector('.coursework')?.value;

                    if (institution || eduLocation || degree || cgpa || coursework) {
                        hasEducationContent = true;
                        const eduDiv = document.createElement('div');
                        eduDiv.classList.add('preview-entry-item'); // Generic class for styling entries

                        const h3 = document.createElement('h3');
                        let institutionText = institution || 'Institution Name';
                        if (eduLocation) {
                            institutionText += ` - ${eduLocation}`;
                        }
                        h3.textContent = institutionText;
                        eduDiv.appendChild(h3);

                        let degreeLine = '';
                        if (degree) {
                            degreeLine += degree;
                        }
                        if (cgpa) {
                            degreeLine += (degreeLine ? ' - ' : '') + `CGPA: ${cgpa}`;
                        }
                        if (degreeLine) {
                            const pDegreeGpa = document.createElement('p');
                            pDegreeGpa.textContent = degreeLine;
                            eduDiv.appendChild(pDegreeGpa);
                        }

                        if (coursework) {
                            const pCourse = document.createElement('p');
                            pCourse.textContent = `Relevant Coursework: ${coursework}`;
                            eduDiv.appendChild(pCourse);
                        }
                        previewEducationEntriesContainer.appendChild(eduDiv);
                    }
                });
            } else {
                previewEducationSection.style.display = 'none';
            }
        }
    };

    // --- Factory for Creating Form Entries ---
    const createFormEntry = (type, container) => {
        if (!container) return;
        const entryDiv = document.createElement('div');
        entryDiv.classList.add(`${type}-entry`); // e.g., 'education-entry'
        let innerHTML = '';

        switch (type) {
            case 'education':
                innerHTML = `
                    <input type="text" class="institution" placeholder="Institution">
                    <input type="text" class="eduLocation" placeholder="Location">
                    <input type="text" class="degree" placeholder="Degree">
                    <input type="text" class="cgpa" placeholder="CGPA">
                    <textarea class="coursework" placeholder="Relevant Coursework"></textarea>
                `;
                break;
            // Add other cases (experience, project, etc.) here later
        }
        entryDiv.innerHTML = innerHTML;
        container.appendChild(entryDiv);
        entryDiv.querySelectorAll('input, textarea, select').forEach(inputEl => { // Changed variable name
            if(inputEl) inputEl.addEventListener('input', updatePreview);
        });
        updatePreview();
    };

    // --- Helper for Toggling Form Section Visibility ---
    const setupToggleListener = (toggleCheckbox, contentDiv) => {
        if (toggleCheckbox && contentDiv) {
            toggleCheckbox.addEventListener('change', () => {
                contentDiv.style.display = toggleCheckbox.checked ? '' : 'none';
                updatePreview();
            });
            // Set initial state of content based on checkbox
            contentDiv.style.display = toggleCheckbox.checked ? '' : 'none';
        }
    };

    // --- Add Event Listeners ---
    const allHeaderInputs = [
        fullNameInput, jobTitleInput, phoneInput, locationInput, emailInput, linkedinInput
    ];
    allHeaderInputs.forEach(input => {
        if (input) input.addEventListener('input', updatePreview);
    });

    if (headerLayoutRadios) {
        headerLayoutRadios.forEach(radio => {
            if(radio) radio.addEventListener('change', updatePreview);
        });
    }

    // Education Section Listeners
    if (toggleEducation) setupToggleListener(toggleEducation, educationFormContent);
    if (addEducationButton) {
        addEducationButton.addEventListener('click', () => {
            if(educationEntriesContainer) createFormEntry('education', educationEntriesContainer);
        });
    }
    // Initial listeners for hardcoded education entry
    if (educationEntriesContainer) {
        educationEntriesContainer.querySelectorAll('.education-entry input, .education-entry textarea').forEach(el => {
            if(el) el.addEventListener('input', updatePreview);
        });
    }


    // Initial preview update
    updatePreview();
});
