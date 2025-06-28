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

    // Objective
    const objectiveInput = document.getElementById('objective');

    // Skills & Abilities
    const skillsAbilitiesInput = document.getElementById('skillsAbilities');
    const skillsLanguagesInput = document.getElementById('skillsLanguages');
    const skillsFrameworksInput = document.getElementById('skillsFrameworks');
    const skillsToolsInput = document.getElementById('skillsTools');
    const skillsPlatformsInput = document.getElementById('skillsPlatforms');

    // Experience (dynamic entries)
    const experienceFormEntriesContainer = document.getElementById('experience-entries');
    const addExperienceButton = document.getElementById('add-experience');

    // Education (dynamic entries)
    const educationFormEntriesContainer = document.getElementById('education-form-entries'); // Corrected ID
    const addEducationButton = document.getElementById('add-education');

    // Communication
    const communicationInput = document.getElementById('communication');

    // Leadership
    const leadershipInput = document.getElementById('leadership');

    // References (dynamic entries)
    const referenceFormEntriesContainer = document.getElementById('reference-entries');
    const addReferenceButton = document.getElementById('add-reference');


    // --- Preview Elements ---
    // Header
    const previewHeaderDiv = document.getElementById('preview-header'); // Get the container
    const previewFullName = document.getElementById('preview-fullName');
    const previewJobTitle = document.getElementById('preview-jobTitle');
    const previewPhone = document.getElementById('preview-phone');
    const previewLocation = document.getElementById('preview-location');
    const previewEmail = document.getElementById('preview-email');
    const previewLinkedin = document.getElementById('preview-linkedin');

    // Objective
    const previewObjectiveSection = document.getElementById('preview-objective-section');
    const previewObjective = document.getElementById('preview-objective');

    // Skills & Abilities
    const previewSkillsAbilities = document.getElementById('preview-skillsAbilities');
    const previewSkillsLanguagesList = document.getElementById('preview-skillsLanguages-list');
    const previewSkillsFrameworksList = document.getElementById('preview-skillsFrameworks-list');
    const previewSkillsToolsList = document.getElementById('preview-skillsTools-list');
    const previewSkillsPlatformsList = document.getElementById('preview-skillsPlatforms-list');


    // Experience (dynamic entries)
    const previewExperienceSection = document.getElementById('preview-experience-section'); // Get the whole section
    const previewExperienceEntriesContainer = document.getElementById('preview-experience-entries');

    // Education (dynamic entries)
    const previewEducationEntriesContainer = document.getElementById('preview-education-entries');

    // Communication
    const previewCommunication = document.getElementById('preview-communication');

    // Leadership
    const previewLeadership = document.getElementById('preview-leadership');

    // References (dynamic entries)
    const previewReferencesSection = document.getElementById('preview-references-section');
    const previewReferenceEntriesContainer = document.getElementById('preview-reference-entries');

    // Toggle Checkboxes for Form Sections
    const toggleObjective = document.getElementById('toggle-objective');
    const toggleDetailedSkills = document.getElementById('toggle-detailed-skills');
    const toggleCommunication = document.getElementById('toggle-communication');
    const toggleLeadership = document.getElementById('toggle-leadership');
    const toggleReferences = document.getElementById('toggle-references');

    // Form Content Divs to be Toggled
    const objectiveFormContent = document.getElementById('objective-form-content');
    const detailedSkillsForm = document.getElementById('detailed-skills-form');
    const communicationFormContent = document.getElementById('communication-form-content');
    const leadershipFormContent = document.getElementById('leadership-form-content');
    const referencesFormContent = document.getElementById('references-form-content');

    // Experience Filter Checkboxes
    const experienceFilterCheckboxes = document.querySelectorAll('.experience-filter');

    // Preview div for detailed skills (wrapper)
    const previewDetailedSkillsDiv = document.getElementById('preview-detailed-skills');


    // --- Default Preview Text ---
    const defaultTexts = {
        fullName: 'Graham Barnes',
        jobTitle: 'Web Developer',
        phone: '303.555.0123',
        location: 'Denver, CO',
        email: 'Graham@EXAMPLE.COM',
        linkedin: 'www.linkedin.com',
        objective: 'To obtain a challenging web developer position in a dynamic and innovative organization where I can utilize my technical and creative skills to develop and maintain responsive, user-friendly, and visually appealing websites.',
        skillsAbilities: 'Proficient in a range of programming languages, with experience in developing and maintaining responsive, user-friendly, and visually appealing websites using modern web development frameworks and tools.',
        communication: 'Excellent communication skills enable me to collaborate with clients, stakeholders, and cross-functional teams to deliver high-quality results.',
        leadership: 'Mentor junior developers, coordinate project tasks, and implement best practices to ensure timely delivery of high-quality web applications.',
        experience: [{
            companyName: 'Proseware, Inc.',
            expJobTitle: 'Front-end web developer',
            expDates: 'September 20XX – August 20XX',
            expResponsibilities: ['Develop and maintain responsive, user-friendly, and visually appealing websites using programming languages.', 'Collaborate with cross-functional teams to optimize website performance, user experience, and SEO.']
        }, {
            companyName: 'Adantum Corporation',
            expJobTitle: 'Full-stack web developer',
            expDates: 'December 20XX – September 20XX',
            expResponsibilities: ['Built and maintained scalable and secure web applications.', 'Designed and implemented custom CMS solutions to meet clients\' unique requirements, resulting in increased efficiency and user engagement.']
        }],
        education: [{
            institution: 'Glennwood University',
            eduLocation: 'Boulder, CO',
            degree: 'BS in Computer Science',
            gpa: '3.8',
            coursework: 'Relevant coursework: web development, database management, software engineering'
        }],
        references: [{
            refName: 'Ian Hansson',
            refJobTitle: 'Web Developer Manager',
            refCompany: 'Proseware, Inc.',
            refContact: '303.555.0156'
        }]
    };

    // --- Update Preview Function ---
    const updatePreview = () => {
        // Header
        // Apply layout class
        let selectedLayout = 'inline'; // default
        if (headerLayoutRadios && headerLayoutRadios.length > 0) { // Check if headerLayoutRadios exists
            headerLayoutRadios.forEach(radio => {
                if (radio.checked) {
                    selectedLayout = radio.value;
                }
            });
            if (selectedLayout === 'stacked') {
                previewHeaderDiv.classList.add('stacked');
                previewHeaderDiv.classList.remove('inline');
            } else {
                previewHeaderDiv.classList.add('inline');
                previewHeaderDiv.classList.remove('stacked');
            }
        }


        if(previewFullName) previewFullName.textContent = fullNameInput.value || defaultTexts.fullName;
        if(previewJobTitle) previewJobTitle.textContent = jobTitleInput.value || defaultTexts.jobTitle;
        if(previewPhone) previewPhone.textContent = phoneInput.value || defaultTexts.phone;
        if(previewLocation) previewLocation.textContent = locationInput.value || defaultTexts.location;
        if(previewEmail) previewEmail.textContent = emailInput.value || defaultTexts.email;
        if(previewLinkedin) previewLinkedin.textContent = linkedinInput.value || defaultTexts.linkedin;

        // Objective
        if (toggleObjective && toggleObjective.checked && objectiveInput.value && previewObjectiveSection && previewObjective) {
            previewObjectiveSection.style.display = '';
            previewObjective.textContent = objectiveInput.value;
        } else if (previewObjectiveSection) {
            previewObjectiveSection.style.display = 'none';
        }

        // Skills & Abilities
        if(previewSkillsAbilities) previewSkillsAbilities.textContent = skillsAbilitiesInput.value || defaultTexts.skillsAbilities; // Main description

        // Helper function to populate skill subcategories
        const populateSkillList = (inputElement, previewListElement, categoryName) => {
            if (!inputElement || !previewListElement) return; // Guard against null elements
            previewListElement.innerHTML = ''; // Clear previous
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
                    // Decide on newline or inline based on presence of newlines in input
                    if (skillsText.includes('\n')) {
                        previewListElement.classList.add('newline-items');
                    } else {
                        previewListElement.classList.remove('newline-items');
                    }
                } else {
                    previewListElement.style.display = 'none';
                }
            } else {
                previewListElement.style.display = 'none';
            }
        };


        if (toggleDetailedSkills && toggleDetailedSkills.checked && previewDetailedSkillsDiv) {
            let hasDetailedSkillContent = false;
            hasDetailedSkillContent = populateSkillList(skillsLanguagesInput, previewSkillsLanguagesList, 'Languages') || hasDetailedSkillContent;
            hasDetailedSkillContent = populateSkillList(skillsFrameworksInput, previewSkillsFrameworksList, 'Frameworks/Libraries') || hasDetailedSkillContent;
            hasDetailedSkillContent = populateSkillList(skillsToolsInput, previewSkillsToolsList, 'Tools') || hasDetailedSkillContent;
            hasDetailedSkillContent = populateSkillList(skillsPlatformsInput, previewSkillsPlatformsList, 'Platforms') || hasDetailedSkillContent;

            previewDetailedSkillsDiv.style.display = hasDetailedSkillContent ? '' : 'none';
        } else if (previewDetailedSkillsDiv) {
            previewDetailedSkillsDiv.style.display = 'none';
        }


        // Communication
        if (toggleCommunication && toggleCommunication.checked && previewCommunicationSection) {
            previewCommunicationSection.style.display = '';
            if (previewCommunication && communicationInput) { // Ensure communicationInput is also checked
                previewCommunication.textContent = communicationInput.value || defaultTexts.communication;
            }
        } else if (previewCommunicationSection) {
            previewCommunicationSection.style.display = 'none';
        }

        // Leadership
        if (toggleLeadership && toggleLeadership.checked && previewLeadershipSection) {
            previewLeadershipSection.style.display = '';
            if (previewLeadership && leadershipInput) { // Ensure leadershipInput is also checked
                previewLeadership.textContent = leadershipInput.value || defaultTexts.leadership;
            }
        } else if (previewLeadershipSection) {
            previewLeadershipSection.style.display = 'none';
        }

        // Experience / Projects / Research
        if(previewExperienceEntriesContainer && previewExperienceSection && experienceFormEntriesContainer){ // Added experienceFormEntriesContainer null check
            previewExperienceEntriesContainer.innerHTML = '';
            const experienceForms = experienceFormEntriesContainer.querySelectorAll('.experience-entry');
            let rawEntriesData = []; // Renamed to avoid conflict later

            experienceForms.forEach(form => {
                const expTypeElement = form.querySelector('.expType');
                const companyNameElement = form.querySelector('.companyName');
                const expJobTitleElement = form.querySelector('.expJobTitle');
                const expDatesElement = form.querySelector('.expDates');
                const expResponsibilitiesElement = form.querySelector('.expResponsibilities');

                const expType = expTypeElement ? expTypeElement.value : 'experience';
                const companyName = companyNameElement ? companyNameElement.value : '';
                const expJobTitle = expJobTitleElement ? expJobTitleElement.value : '';
                const expDates = expDatesElement ? expDatesElement.value : '';
                const expResponsibilities = expResponsibilitiesElement ? expResponsibilitiesElement.value.split('\n').filter(line => line.trim() !== '') : [];


                if (companyName || expJobTitle || expDates || expResponsibilities.length > 0) {
                    rawEntriesData.push({ // Changed variable name here
                        type: expType,
                        companyName: companyName || (expType === 'project' ? 'Project Title' : expType === 'research' ? 'Research Title' : 'Company Name'),
                        jobTitle: expJobTitle,
                        dates: expDates || 'Dates',
                        responsibilities: expResponsibilities
                    });
                }
            });

            // Filter rawEntriesData based on selected filter checkboxes
            const selectedExperienceFilters = [];
            if (experienceFilterCheckboxes) {
                experienceFilterCheckboxes.forEach(cb => {
                    if (cb.checked) selectedExperienceFilters.push(cb.value);
                });
            }

            const allEntriesData = rawEntriesData.filter(entry => selectedExperienceFilters.includes(entry.type));


            if (allEntriesData.length > 0) {
                previewExperienceSection.style.display = '';

                const groupedEntries = { experience: [], project: [], research: [] };
                allEntriesData.forEach(entry => {
                    if(groupedEntries[entry.type]) groupedEntries[entry.type].push(entry);
                });

                const typeHeadings = {
                    experience: 'Professional Experience',
                    project: 'Projects',
                    research: 'Research'
                };

                for (const type in groupedEntries) {
                    if (groupedEntries[type].length > 0) {
                        const typeHeading = document.createElement('h3');
                        typeHeading.classList.add('experience-type-heading');
                        typeHeading.textContent = typeHeadings[type];
                        previewExperienceEntriesContainer.appendChild(typeHeading);

                        groupedEntries[type].forEach(entry => {
                            const expDiv = document.createElement('div');
                            const h4 = document.createElement('h4');
                            h4.textContent = entry.companyName;
                            expDiv.appendChild(h4);

                            let subTextParts = [];
                            if(entry.jobTitle) subTextParts.push(entry.jobTitle);
                            if(entry.dates) subTextParts.push(entry.dates);
                            if(subTextParts.length > 0){
                                const pSub = document.createElement('p');
                                pSub.textContent = subTextParts.join(' | ');
                                expDiv.appendChild(pSub);
                            }

                            if (entry.responsibilities.length > 0) {
                                const ul = document.createElement('ul');
                                entry.responsibilities.forEach(resp => {
                                    const li = document.createElement('li');
                                    li.textContent = resp;
                                    ul.appendChild(li);
                                });
                                expDiv.appendChild(ul);
                            }
                            previewExperienceEntriesContainer.appendChild(expDiv);
                        });
                    }
                }
            } else {
                previewExperienceSection.style.display = 'none';
            }
        }


        // Education
        if(previewEducationEntriesContainer && educationFormEntriesContainer) {
            previewEducationEntriesContainer.innerHTML = ''; // Clear previous dynamic entries AND initial sample HTML
            const educationForms = educationFormEntriesContainer.querySelectorAll('.education-entry');

            educationForms.forEach(form => {
                const institution = form.querySelector('.institution').value;
                const eduLocation = form.querySelector('.eduLocation').value;
                const degree = form.querySelector('.degree').value;
                const gpa = form.querySelector('.gpa').value;
                const coursework = form.querySelector('.coursework').value;

                if (institution || eduLocation || degree || gpa || coursework) {
                    const eduDiv = document.createElement('div');
                    const h3 = document.createElement('h3');
                    h3.textContent = institution || 'Institution';
                    eduDiv.appendChild(h3);

                    const pLoc = document.createElement('p');
                    pLoc.textContent = eduLocation || 'Location';
                    eduDiv.appendChild(pLoc);

                    const pDegree = document.createElement('p');
                    pDegree.textContent = degree || 'Degree';
                    eduDiv.appendChild(pDegree);

                    if (gpa) {
                        const pGpa = document.createElement('p');
                        pGpa.textContent = `GPA: ${gpa}`;
                        eduDiv.appendChild(pGpa);
                    }
                    if (coursework) {
                        const pCourse = document.createElement('p');
                        pCourse.textContent = `Relevant coursework: ${coursework}`;
                        eduDiv.appendChild(pCourse);
                    }
                    previewEducationEntriesContainer.appendChild(eduDiv);
                }
            });
            // If all education forms are blank, previewEducationEntriesContainer will be empty.
            // The "Education" <h2> heading in the preview remains visible.
        }


        // References
        if(previewReferenceEntriesContainer && referenceFormEntriesContainer && previewReferencesSection && toggleReferences) { // Added toggleReferences check
            if (toggleReferences.checked) {
                previewReferenceEntriesContainer.innerHTML = '';
                const referenceForms = referenceFormEntriesContainer.querySelectorAll('.reference-entry');
                let hasReferenceContent = false;

                referenceForms.forEach(form => {
                    const refName = form.querySelector('.refName').value;
                    const refJobTitle = form.querySelector('.refJobTitle').value;
                    const refCompany = form.querySelector('.refCompany').value;
                    const refContact = form.querySelector('.refContact').value;

                    if (refName || refJobTitle || refCompany || refContact) {
                        hasReferenceContent = true;
                        const refDiv = document.createElement('div');
                        const pName = document.createElement('p');
                        const strongName = document.createElement('strong');
                        strongName.textContent = refName || 'Reference Name';
                        pName.appendChild(strongName);
                        refDiv.appendChild(pName);

                        const pTitle = document.createElement('p');
                        pTitle.textContent = refJobTitle || 'Job Title';
                        refDiv.appendChild(pTitle);

                        const pCompany = document.createElement('p');
                        pCompany.textContent = refCompany || 'Company';
                        refDiv.appendChild(pCompany);

                        const pContact = document.createElement('p');
                        pContact.textContent = refContact || 'Contact';
                        refDiv.appendChild(pContact);

                        previewReferenceEntriesContainer.appendChild(refDiv);
                    }
                });

                if (hasReferenceContent) {
                    previewReferencesSection.style.display = '';
                } else {
                    previewReferencesSection.style.display = 'none'; // Hide if toggle is on but no content
                }
            } else {
                previewReferencesSection.style.display = 'none'; // Hide if toggle is off
            }
        } else if (previewReferencesSection) { // Ensure section is hidden if toggleReferences is somehow null
            previewReferencesSection.style.display = 'none';
        }
    };

    // --- Factory for Creating Form Entries (Education, Experience, Reference) ---
    const createFormEntry = (type, container) => {
        if (!container) return; // Guard against null container
        const entryDiv = document.createElement('div');
        entryDiv.classList.add(`${type}-entry`);
        let innerHTML = '';
        let entryIdSuffix = Date.now(); // For unique IDs for labels if needed in future

        switch (type) {
            case 'experience':
                innerHTML = `
                    <label for="expType-${entryIdSuffix}" style="display: block; margin-bottom: 5px;">Type:</label>
                    <select class="expType" id="expType-${entryIdSuffix}" style="margin-bottom: 10px;">
                        <option value="experience" selected>Professional Experience</option>
                        <option value="project">Project</option>
                        <option value="research">Research</option>
                    </select>
                    <input type="text" class="companyName" placeholder="Company/Project Name/Research Title">
                    <input type="text" class="expJobTitle" placeholder="Role/Job Title (if applicable)">
                    <input type="text" class="expDates" placeholder="Dates (e.g., ... or Year)">
                    <textarea class="expResponsibilities" placeholder="Details, Responsibilities & Achievements (one per line)"></textarea>
                `;
                break;
            case 'education':
                innerHTML = `
                    <input type="text" class="institution" placeholder="Institution">
                    <input type="text" class="eduLocation" placeholder="Location">
                    <input type="text" class="degree" placeholder="Degree">
                    <input type="text" class="gpa" placeholder="GPA">
                    <textarea class="coursework" placeholder="Relevant Coursework"></textarea>
                `;
                break;
            case 'reference':
                innerHTML = `
                    <input type="text" class="refName" placeholder="Reference Name">
                    <input type="text" class="refJobTitle" placeholder="Job Title">
                    <input type="text" class="refCompany" placeholder="Company">
                    <input type="text" class="refContact" placeholder="Contact">
                `;
                break;
        }
        entryDiv.innerHTML = innerHTML;
        container.appendChild(entryDiv);
        entryDiv.querySelectorAll('input, textarea, select').forEach(input => input.addEventListener('input', updatePreview));
        updatePreview();
    };

    // --- Add Event Listeners ---
    // Static fields
    const allStaticInputs = [
        fullNameInput, jobTitleInput, phoneInput, locationInput, emailInput, linkedinInput,
        objectiveInput, skillsAbilitiesInput,
        skillsLanguagesInput, skillsFrameworksInput, skillsToolsInput, skillsPlatformsInput,
        communicationInput, leadershipInput
    ];
    allStaticInputs.forEach(input => {
        if (input) input.addEventListener('input', updatePreview);
    });

    if (headerLayoutRadios) {
        headerLayoutRadios.forEach(radio => {
            radio.addEventListener('change', updatePreview);
        });
    }

    // Toggle Form Section Visibility Listeners
    const setupToggleListener = (toggleCheckbox, contentDiv) => {
        if (toggleCheckbox && contentDiv) {
            toggleCheckbox.addEventListener('change', () => {
                contentDiv.style.display = toggleCheckbox.checked ? '' : 'none';
                updatePreview(); // Update preview when form sections are toggled
            });
            // Initial state based on checkbox (if not using inline style for initial hide)
            // For referencesFormContent, it's initially hidden by inline style, so this is fine.
            // For others, they are checked by default, so contentDiv should be visible.
             contentDiv.style.display = toggleCheckbox.checked ? '' : 'none';
        }
    };

    setupToggleListener(toggleObjective, objectiveFormContent);
    setupToggleListener(toggleDetailedSkills, detailedSkillsForm);
    setupToggleListener(toggleCommunication, communicationFormContent);
    setupToggleListener(toggleLeadership, leadershipFormContent);
    setupToggleListener(toggleReferences, referencesFormContent); // This will make reference inputs appear

    // Experience Filter Checkbox Listeners
    if(experienceFilterCheckboxes) {
        experienceFilterCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updatePreview);
        });
    }

    if (addExperienceButton) {
        addExperienceButton.addEventListener('click', () => createFormEntry('experience', experienceFormEntriesContainer));
    }
    if (addEducationButton) {
        addEducationButton.addEventListener('click', () => createFormEntry('education', educationFormEntriesContainer));
    }
    if (addReferenceButton) {
        addReferenceButton.addEventListener('click', () => createFormEntry('reference', referenceFormEntriesContainer));
    }

    // Initial listeners for any pre-existing dynamic entries
    document.querySelectorAll('.experience-entry input, .experience-entry textarea, .experience-entry select').forEach(el => el.addEventListener('input', updatePreview));
    document.querySelectorAll('.education-entry input, .education-entry textarea').forEach(el => el.addEventListener('input', updatePreview));
    document.querySelectorAll('.reference-entry input').forEach(el => el.addEventListener('input', updatePreview));

    updatePreview(); // Initial preview update
});
