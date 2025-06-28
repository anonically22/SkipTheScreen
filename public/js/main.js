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
            radio.addEventListener('change', updatePreview);
        });
    }

    // Initial preview update
    updatePreview();
});
