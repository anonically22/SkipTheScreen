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
    const previewObjective = document.getElementById('preview-objective');

    // Skills & Abilities
    const previewSkillsAbilities = document.getElementById('preview-skillsAbilities');

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
    const previewReferenceEntriesContainer = document.getElementById('preview-reference-entries');

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

        previewFullName.textContent = fullNameInput.value || defaultTexts.fullName;
        previewJobTitle.textContent = jobTitleInput.value || defaultTexts.jobTitle;
        previewPhone.textContent = phoneInput.value || defaultTexts.phone;
        previewLocation.textContent = locationInput.value || defaultTexts.location;
        previewEmail.textContent = emailInput.value || defaultTexts.email;
        previewLinkedin.textContent = linkedinInput.value || defaultTexts.linkedin;

        // Objective
        previewObjective.textContent = objectiveInput.value || defaultTexts.objective;

        // Skills & Abilities
        previewSkillsAbilities.textContent = skillsAbilitiesInput.value || defaultTexts.skillsAbilities;

        // Communication
        previewCommunication.textContent = communicationInput.value || defaultTexts.communication;

        // Leadership
        previewLeadership.textContent = leadershipInput.value || defaultTexts.leadership;

        // Experience
        previewExperienceEntriesContainer.innerHTML = ''; // Clear previous entries
        const experienceForms = experienceFormEntriesContainer.querySelectorAll('.experience-entry');
        let hasExperienceContent = false;

        experienceForms.forEach(form => {
            const companyName = form.querySelector('.companyName').value;
            const expJobTitle = form.querySelector('.expJobTitle').value;
            const expDates = form.querySelector('.expDates').value;
            const expResponsibilities = form.querySelector('.expResponsibilities').value.split('\n').filter(line => line.trim() !== '');

            if (companyName || expJobTitle || expDates || expResponsibilities.length > 0) {
                hasExperienceContent = true;
                const expDiv = document.createElement('div');
                const h3 = document.createElement('h3');
                h3.textContent = companyName || 'Company Name';
                const pSub = document.createElement('p');
                pSub.textContent = `${expJobTitle || 'Job Title'} | ${expDates || 'Dates'}`;

                expDiv.appendChild(h3);
                expDiv.appendChild(pSub);

                if (expResponsibilities.length > 0) {
                    const ul = document.createElement('ul');
                    expResponsibilities.forEach(resp => {
                        const li = document.createElement('li');
                        li.textContent = resp;
                        ul.appendChild(li);
                    });
                    expDiv.appendChild(ul);
                }
                previewExperienceEntriesContainer.appendChild(expDiv);
            }
        });

        // Show/hide experience section based on content
        if (hasExperienceContent) {
            previewExperienceSection.style.display = ''; // Or 'block' if you prefer
        } else {
            // If there are no forms at all (e.g. initial state, or user deleted all)
            // AND the default shouldn't be shown because we want it optional
            if (experienceForms.length === 0) {
                 previewExperienceSection.style.display = 'none';
            } else {
                // If there are forms, but all are empty
                 previewExperienceSection.style.display = 'none';
            }
            // To completely remove default population for experience when optional:
            // previewExperienceSection.style.display = 'none';
        }


        // Education
        previewEducationEntriesContainer.innerHTML = '';
        const educationForms = educationFormEntriesContainer.querySelectorAll('.education-entry');
         if (educationForms.length === 0 && educationFormEntriesContainer.children.length === 0) {
            defaultTexts.education.forEach(edu => {
                const eduDiv = document.createElement('div');
                eduDiv.innerHTML = `
                    <h3>${edu.institution}</h3>
                    <p>${edu.eduLocation}</p>
                    <p>${edu.degree}</p>
                    <p>GPA: ${edu.gpa}</p>
                    <p>Relevant coursework: ${edu.coursework}</p>
                `;
                previewEducationEntriesContainer.appendChild(eduDiv);
            });
        } else {
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
            if (previewEducationEntriesContainer.children.length === 0) { // Fallback if all fields are empty
                 defaultTexts.education.forEach(edu => {
                    const eduDiv = document.createElement('div');
                    eduDiv.innerHTML = `
                        <h3>${edu.institution}</h3>
                        <p>${edu.eduLocation}</p>
                        <p>${edu.degree}</p>
                        <p>GPA: ${edu.gpa}</p>
                        <p>Relevant coursework: ${edu.coursework}</p>
                    `;
                    previewEducationEntriesContainer.appendChild(eduDiv);
                });
            }
        }

        // References
        previewReferenceEntriesContainer.innerHTML = '';
        const referenceForms = referenceFormEntriesContainer.querySelectorAll('.reference-entry');
        if (referenceForms.length === 0 && referenceFormEntriesContainer.children.length === 0) {
            defaultTexts.references.forEach(ref => {
                const refDiv = document.createElement('div');
                refDiv.innerHTML = `
                    <p><strong>${ref.refName}</strong></p>
                    <p>${ref.refJobTitle}</p>
                    <p>${ref.refCompany}</p>
                    <p>${ref.refContact}</p>
                `;
                previewReferenceEntriesContainer.appendChild(refDiv);
            });
        } else {
            referenceForms.forEach(form => {
                const refName = form.querySelector('.refName').value;
                const refJobTitle = form.querySelector('.refJobTitle').value;
                const refCompany = form.querySelector('.refCompany').value;
                const refContact = form.querySelector('.refContact').value;

                if (refName || refJobTitle || refCompany || refContact) {
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
             if (previewReferenceEntriesContainer.children.length === 0) { // Fallback if all fields are empty
                defaultTexts.references.forEach(ref => {
                    const refDiv = document.createElement('div');
                    refDiv.innerHTML = `
                        <p><strong>${ref.refName}</strong></p>
                        <p>${ref.refJobTitle}</p>
                        <p>${ref.refCompany}</p>
                        <p>${ref.refContact}</p>
                    `;
                    previewReferenceEntriesContainer.appendChild(refDiv);
                });
            }
        }
    };

    // --- Factory for Creating Form Entries (Education, Experience, Reference) ---
    const createFormEntry = (type, container) => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add(`${type}-entry`);
        let innerHTML = '';
        switch (type) {
            case 'experience':
                innerHTML = `
                    <input type="text" class="companyName" placeholder="Company Name">
                    <input type="text" class="expJobTitle" placeholder="Job Title">
                    <input type="text" class="expDates" placeholder="Start – End Dates">
                    <textarea class="expResponsibilities" placeholder="Responsibilities (one per line)"></textarea>
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
        // Add event listeners to new inputs/textareas within this entry
        entryDiv.querySelectorAll('input, textarea').forEach(input => input.addEventListener('input', updatePreview));
        updatePreview(); // Update preview immediately after adding
    };

    // --- Add Event Listeners ---
    // Static fields
    const allStaticInputs = [
        fullNameInput, jobTitleInput, phoneInput, locationInput, emailInput, linkedinInput,
        objectiveInput, skillsAbilitiesInput, communicationInput, leadershipInput
    ];
    allStaticInputs.forEach(input => {
        if (input) input.addEventListener('input', updatePreview);
    });

    // Header layout radio buttons
    headerLayoutRadios.forEach(radio => {
        radio.addEventListener('change', updatePreview);
    });

    // Dynamic entry buttons
    if (addExperienceButton) {
        addExperienceButton.addEventListener('click', () => createFormEntry('experience', experienceFormEntriesContainer));
    }
    if (addEducationButton) {
        addEducationButton.addEventListener('click', () => createFormEntry('education', educationFormEntriesContainer));
    }
    if (addReferenceButton) {
        addReferenceButton.addEventListener('click', () => createFormEntry('reference', referenceFormEntriesContainer));
    }

    // Initial listeners for any pre-existing dynamic entries (e.g. the first one in HTML)
    document.querySelectorAll('.experience-entry input, .experience-entry textarea').forEach(el => el.addEventListener('input', updatePreview));
    document.querySelectorAll('.education-entry input, .education-entry textarea').forEach(el => el.addEventListener('input', updatePreview));
    document.querySelectorAll('.reference-entry input').forEach(el => el.addEventListener('input', updatePreview));


    // Initial preview update on page load
    updatePreview();
});
