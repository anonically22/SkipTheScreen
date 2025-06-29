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

    // Skills & Abilities Form Elements
    const toggleSkills = document.getElementById('toggle-skills');
    const skillsFormContent = document.getElementById('skills-form-content');
    const skillsAbilitiesInput = document.getElementById('skillsAbilities'); // Main description
    const toggleDetailedSkills = document.getElementById('toggle-detailed-skills');
    const detailedSkillsForm = document.getElementById('detailed-skills-form'); // Wrapper for detailed skill textareas
    const skillsLanguagesInput = document.getElementById('skillsLanguages');
    const skillsFrameworksInput = document.getElementById('skillsFrameworks');
    const skillsToolsInput = document.getElementById('skillsTools');
    const skillsPlatformsInput = document.getElementById('skillsPlatforms');

    // Skills & Abilities Preview Elements
    const previewSkillsAbilitiesSection = document.getElementById('preview-skillsAbilities-section');
    const previewSkillsAbilities = document.getElementById('preview-skillsAbilities'); // <p> for main description
    const previewDetailedSkillsDiv = document.getElementById('preview-detailed-skills'); // Wrapper for detailed skill lists
    const previewSkillsLanguagesList = document.getElementById('preview-skillsLanguages-list');
    const previewSkillsFrameworksList = document.getElementById('preview-skillsFrameworks-list');
    const previewSkillsToolsList = document.getElementById('preview-skillsTools-list');
    const previewSkillsPlatformsList = document.getElementById('preview-skillsPlatforms-list');

    // Experience Form Elements
    const toggleExperience = document.getElementById('toggle-experience');
    const experienceFormContent = document.getElementById('experience-form-content');
    const experienceEntriesContainer = document.getElementById('experience-entries'); // Form container for entries
    const addExperienceButton = document.getElementById('add-experience');

    // Experience Preview Elements
    const previewExperienceSection = document.getElementById('preview-experience-section'); // Main preview section wrapper
    const previewExperienceEntriesContainer = document.getElementById('preview-experience-entries'); // Preview container for entries


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

        // Skills & Abilities Preview Logic
        if (previewSkillsAbilitiesSection && skillsFormContent && skillsAbilitiesInput && previewSkillsAbilities) {
            if (toggleSkills && toggleSkills.checked) {
                previewSkillsAbilitiesSection.style.display = '';
                previewSkillsAbilities.textContent = skillsAbilitiesInput.value || defaultTexts.skillsAbilities || "Your skills summary here...";

                if (toggleDetailedSkills && toggleDetailedSkills.checked && previewDetailedSkillsDiv) {
                    let hasDetailedSkillContent = false;
                    // Ensure populateSkillList is defined before calling it
                    if (typeof populateSkillList === "function") {
                        hasDetailedSkillContent = populateSkillList(skillsLanguagesInput, previewSkillsLanguagesList, 'Languages') || hasDetailedSkillContent;
                        hasDetailedSkillContent = populateSkillList(skillsFrameworksInput, previewSkillsFrameworksList, 'Frameworks/Libraries') || hasDetailedSkillContent;
                        hasDetailedSkillContent = populateSkillList(skillsToolsInput, previewSkillsToolsList, 'Tools') || hasDetailedSkillContent;
                        hasDetailedSkillContent = populateSkillList(skillsPlatformsInput, previewSkillsPlatformsList, 'Platforms') || hasDetailedSkillContent;
                    }
                    previewDetailedSkillsDiv.style.display = hasDetailedSkillContent ? '' : 'none';
                } else if (previewDetailedSkillsDiv) {
                    previewDetailedSkillsDiv.style.display = 'none';
                }
            } else {
                previewSkillsAbilitiesSection.style.display = 'none';
                if (previewDetailedSkillsDiv) previewDetailedSkillsDiv.style.display = 'none'; // Also hide detailed if main skills is off
            }
        }

        // Experience Preview Logic
        if (previewExperienceSection && experienceFormContent && experienceEntriesContainer && previewExperienceEntriesContainer) {
            if (toggleExperience && toggleExperience.checked) {
                previewExperienceSection.style.display = '';
                previewExperienceEntriesContainer.innerHTML = ''; // Clear previous entries

                const experienceForms = experienceEntriesContainer.querySelectorAll('.experience-entry');
                let hasExperienceContent = false;
                experienceForms.forEach(form => {
                    const companyName = form.querySelector('.companyName')?.value;
                    const jobTitle = form.querySelector('.jobTitle')?.value;
                    const expDates = form.querySelector('.expDates')?.value;
                    const expResponsibilitiesText = form.querySelector('.expResponsibilities')?.value;

                    if (companyName || jobTitle || expDates || (expResponsibilitiesText && expResponsibilitiesText.trim() !== '')) {
                        hasExperienceContent = true;
                        const expDiv = document.createElement('div');
                        expDiv.classList.add('preview-entry-item');

                        const h3 = document.createElement('h3');
                        h3.textContent = companyName || 'Company Name';
                        expDiv.appendChild(h3);

                        let subHeadingText = '';
                        if (jobTitle) subHeadingText += jobTitle;
                        if (expDates) subHeadingText += (subHeadingText ? ' | ' : '') + expDates;

                        if (subHeadingText) {
                            const pSubHeading = document.createElement('p');
                            pSubHeading.textContent = subHeadingText;
                            expDiv.appendChild(pSubHeading);
                        }

                        if (expResponsibilitiesText && expResponsibilitiesText.trim() !== '') {
                            const responsibilitiesArray = expResponsibilitiesText.split('\n').filter(line => line.trim() !== '');
                            if (responsibilitiesArray.length > 0) {
                                const ul = document.createElement('ul');
                                responsibilitiesArray.forEach(resp => {
                                    const li = document.createElement('li');
                                    li.textContent = resp;
                                    ul.appendChild(li);
                                });
                                expDiv.appendChild(ul);
                            }
                        }
                        previewExperienceEntriesContainer.appendChild(expDiv);
                    }
                });
                 // If toggle is checked but no content, H2 "Experience" still shows, entries area is blank.
                 // To hide H2 as well if no content:
                 // previewExperienceSection.style.display = hasExperienceContent ? '' : 'none';

            } else {
                previewExperienceSection.style.display = 'none';
            }
        }
    };

    // --- Helper function to populate skill subcategories in Preview ---
    // (This function was present in previous full versions, re-adding/ensuring its existence)
    const populateSkillList = (inputElement, previewListElement, categoryName) => {
        if (!inputElement || !previewListElement) return false;
        previewListElement.innerHTML = '';
        const skillsText = inputElement.value.trim();
        if (skillsText) {
            const skillsArray = skillsText.split(/[\n,]+/).map(s => s.trim()).filter(s => s);
            if (skillsArray.length > 0) {
                const h4 = document.createElement('h4');
                h4.textContent = `${categoryName}: `;
                previewListElement.appendChild(h4);
                const ul = document.createElement('ul');
                skillsArray.forEach(skill => {
                    const li = document.createElement('li');
                    li.textContent = skill;
                    ul.appendChild(li);
                });
                previewListElement.appendChild(ul);
                previewListElement.style.display = '';
                if (skillsText.includes('\n')) {
                    previewListElement.classList.add('newline-items');
                } else {
                    previewListElement.classList.remove('newline-items');
                }
                return true; // Content was added
            }
        }
        previewListElement.style.display = 'none';
        return false; // No content added
    };


    // --- Factory for Creating Form Entries ---
    const createFormEntry = (type, container) => {
        if (!container) return;
        const entryDiv = document.createElement('div');
        entryDiv.classList.add(`${type}-entry`);
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
            case 'experience':
                innerHTML = `
                    <input type="text" class="companyName" placeholder="Company Name">
                    <input type="text" class="jobTitle" placeholder="Job Title">
                    <input type="text" class="expDates" placeholder="Dates (e.g., Sept 20XX – Aug 20XX)">
                    <textarea class="expResponsibilities" placeholder="Responsibilities (one per line)"></textarea>
                `;
                break;
            // Add other cases (project, research, etc.) here later
        }
        entryDiv.innerHTML = innerHTML;
        container.appendChild(entryDiv);
        entryDiv.querySelectorAll('input, textarea, select').forEach(inputEl => {
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
            contentDiv.style.display = toggleCheckbox.checked ? '' : 'none';
        }
    };

    // --- Add Event Listeners ---
    const allStaticInputs = [ // Renamed to avoid conflict with header-only array
        fullNameInput, jobTitleInput, phoneInput, locationInput, emailInput, linkedinInput,
        skillsAbilitiesInput, skillsLanguagesInput, skillsFrameworksInput, skillsToolsInput, skillsPlatformsInput // Added skills inputs
    ];
    allStaticInputs.forEach(input => {
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
    if (educationEntriesContainer) {
        educationEntriesContainer.querySelectorAll('.education-entry input, .education-entry textarea').forEach(el => {
            if(el) el.addEventListener('input', updatePreview);
        });
    }

    // Skills & Abilities Section Listeners
    if (toggleSkills) setupToggleListener(toggleSkills, skillsFormContent);
    if (toggleDetailedSkills) setupToggleListener(toggleDetailedSkills, detailedSkillsForm);

    // Experience Section Listeners
    if (toggleExperience) setupToggleListener(toggleExperience, experienceFormContent);
    if (addExperienceButton) {
        addExperienceButton.addEventListener('click', () => {
            if (experienceEntriesContainer) createFormEntry('experience', experienceEntriesContainer);
        });
    }
    // Initial listeners for hardcoded experience entry
    if (experienceEntriesContainer) {
        experienceEntriesContainer.querySelectorAll('.experience-entry input, .experience-entry textarea').forEach(el => {
            if(el) el.addEventListener('input', updatePreview);
        });
    }
    // Input listeners for skills textareas are covered by allStaticInputs (this comment seems misplaced, should be with skills)


    // Initial preview update
    updatePreview();
});
