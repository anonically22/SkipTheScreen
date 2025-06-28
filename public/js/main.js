document.addEventListener('DOMContentLoaded', () => {
    // Personal Info
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const linkedinInput = document.getElementById('linkedin');
    const summaryInput = document.getElementById('summary');
    const skillsInput = document.getElementById('skills');

    const previewName = document.getElementById('preview-name');
    const previewEmail = document.getElementById('preview-email');
    const previewPhone = document.getElementById('preview-phone');
    const previewLinkedin = document.getElementById('preview-linkedin');
    const previewSummary = document.getElementById('preview-summary');
    const previewSkills = document.getElementById('preview-skills');

    // Education
    const educationEntriesContainer = document.getElementById('education-entries');
    const addEducationButton = document.getElementById('add-education');
    const previewEducationContainer = document.getElementById('preview-education');

    // Experience
    const experienceEntriesContainer = document.getElementById('experience-entries');
    const addExperienceButton = document.getElementById('add-experience');
    const previewExperienceContainer = document.getElementById('preview-experience');

    const updatePreview = () => {
        // Personal Info
        previewName.textContent = nameInput.value || 'Your Name';
        previewEmail.textContent = emailInput.value || 'your.email@example.com';
        previewPhone.textContent = phoneInput.value || '123-456-7890';
        previewLinkedin.textContent = linkedinInput.value || 'linkedin.com/in/yourprofile';
        previewSummary.textContent = summaryInput.value || 'Your professional summary will appear here.';

        // Skills
        previewSkills.innerHTML = '';
        const skillsArray = skillsInput.value.split(',').map(skill => skill.trim()).filter(skill => skill);
        if (skillsArray.length > 0) {
            skillsArray.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                previewSkills.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'Skill 1';
            previewSkills.appendChild(li);
            const li2 = document.createElement('li');
            li2.textContent = 'Skill 2';
            previewSkills.appendChild(li2);
        }

        // Education
        previewEducationContainer.innerHTML = '';
        const educationForms = educationEntriesContainer.querySelectorAll('.education-entry');
        educationForms.forEach(form => {
            const degree = form.querySelector('.degree').value;
            const school = form.querySelector('.school').value;
            const year = form.querySelector('.edu-year').value;

            if (degree || school || year) {
                const eduDiv = document.createElement('div');
                const h3 = document.createElement('h3');
                h3.textContent = degree || 'Degree';
                const p = document.createElement('p');
                p.textContent = `${school || 'School/University'} - ${year || 'Year'}`;
                eduDiv.appendChild(h3);
                eduDiv.appendChild(p);
                previewEducationContainer.appendChild(eduDiv);
            }
        });
        if (previewEducationContainer.children.length === 0) {
            const eduDiv = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.textContent = 'Degree';
            const p = document.createElement('p');
            p.textContent = 'School/University - Year';
            eduDiv.appendChild(h3);
            eduDiv.appendChild(p);
            previewEducationContainer.appendChild(eduDiv);
        }

        // Experience
        previewExperienceContainer.innerHTML = '';
        const experienceForms = experienceEntriesContainer.querySelectorAll('.experience-entry');
        experienceForms.forEach(form => {
            const jobTitle = form.querySelector('.job-title').value;
            const company = form.querySelector('.company').value;
            const jobYear = form.querySelector('.job-year').value;
            const jobDescription = form.querySelector('.job-description').value;

            if (jobTitle || company || jobYear || jobDescription) {
                const expDiv = document.createElement('div');
                const h3 = document.createElement('h3');
                h3.textContent = jobTitle || 'Job Title';
                const pCompany = document.createElement('p');
                pCompany.textContent = `${company || 'Company'} - ${jobYear || 'Years'}`;
                const pDesc = document.createElement('p');
                pDesc.textContent = jobDescription || 'Job description...';

                expDiv.appendChild(h3);
                expDiv.appendChild(pCompany);
                expDiv.appendChild(pDesc);
                previewExperienceContainer.appendChild(expDiv);
            }
        });
        if (previewExperienceContainer.children.length === 0) {
            const expDiv = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.textContent = 'Job Title';
            const pCompany = document.createElement('p');
            pCompany.textContent = 'Company - Years';
            const pDesc = document.createElement('p');
            pDesc.textContent = 'Job description...';
            expDiv.appendChild(h3);
            expDiv.appendChild(pCompany);
            expDiv.appendChild(pDesc);
            previewExperienceContainer.appendChild(expDiv);
        }
    };

    const createEducationEntry = () => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('education-entry');
        entryDiv.innerHTML = `
            <input type="text" class="degree" placeholder="Degree">
            <input type="text" class="school" placeholder="School/University">
            <input type="text" class="edu-year" placeholder="Year of Completion">
        `;
        educationEntriesContainer.appendChild(entryDiv);
        entryDiv.querySelectorAll('input').forEach(input => input.addEventListener('input', updatePreview));
    };

    const createExperienceEntry = () => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('experience-entry');
        entryDiv.innerHTML = `
            <input type="text" class="job-title" placeholder="Job Title">
            <input type="text" class="company" placeholder="Company">
            <input type="text" class="job-year" placeholder="Years of Experience">
            <textarea class="job-description" placeholder="Job Description"></textarea>
        `;
        experienceEntriesContainer.appendChild(entryDiv);
        entryDiv.querySelectorAll('input, textarea').forEach(input => input.addEventListener('input', updatePreview));
    };

    // Add event listeners to initial form fields
    [nameInput, emailInput, phoneInput, linkedinInput, summaryInput, skillsInput].forEach(input => {
        if (input) input.addEventListener('input', updatePreview);
    });

    educationEntriesContainer.querySelectorAll('input').forEach(input => input.addEventListener('input', updatePreview));
    experienceEntriesContainer.querySelectorAll('input, textarea').forEach(input => input.addEventListener('input', updatePreview));


    if (addEducationButton) {
        addEducationButton.addEventListener('click', () => {
            createEducationEntry();
            updatePreview(); // Update preview after adding new entry
        });
    }

    if (addExperienceButton) {
        addExperienceButton.addEventListener('click', () => {
            createExperienceEntry();
            updatePreview(); // Update preview after adding new entry
        });
    }

    // Initial preview update
    updatePreview();
});
