// Worker Registration JavaScript

// File upload handlers
document.getElementById('passportFile').addEventListener('change', function(e) {
    const fileName = e.target.files[0] ? e.target.files[0].name : '';
    document.getElementById('passportFileName').textContent = fileName ? `Selected: ${fileName}` : '';
});

document.getElementById('medicalFile').addEventListener('change', function(e) {
    const fileCount = e.target.files.length;
    document.getElementById('medicalFileName').textContent = fileCount ? `Selected: ${fileCount} file(s)` : '';
});

// Form validation and submission
document.getElementById('workerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Bootstrap form validation
    if (!this.checkValidity()) {
        e.stopPropagation();
        this.classList.add('was-validated');
        return;
    }
    
    // Check if passport file is uploaded
    const passportFile = document.getElementById('passportFile').files[0];
    if (!passportFile) {
        alert('Please upload a passport copy before submitting.');
        return;
    }
    
    // Simulate form submission
    submitForm();
});

function submitForm() {
    // Show loading state
    const submitBtn = document.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing...';
    submitBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Generate random worker ID
        const workerId = 'WID-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 999) + 1).padStart(3, '0');
        document.getElementById('generatedId').textContent = workerId;
        
        // Hide form and show success state
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('successState').style.display = 'block';
        
        // Show success toast
        const toast = new bootstrap.Toast(document.getElementById('successToast'));
        toast.show();
        
        // Reset button state
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
        
        // Scroll to top
        window.scrollTo(0, 0);
    }, 2000);
}

function resetForm() {
    // Reset form
    document.getElementById('workerForm').reset();
    document.getElementById('workerForm').classList.remove('was-validated');
    
    // Clear file names
    document.getElementById('passportFileName').textContent = '';
    document.getElementById('medicalFileName').textContent = '';
    
    // Show form and hide success state
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('successState').style.display = 'none';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Form auto-save to localStorage (optional feature)
function saveFormData() {
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        dateOfBirth: document.getElementById('dateOfBirth').value,
        nationality: document.getElementById('nationality').value,
        passportNumber: document.getElementById('passportNumber').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        emergencyContact: document.getElementById('emergencyContact').value,
        currentAddress: document.getElementById('currentAddress').value,
        medicalHistory: document.getElementById('medicalHistory').value,
        allergies: document.getElementById('allergies').value,
        currentMedications: document.getElementById('currentMedications').value
    };
    
    localStorage.setItem('workerRegistrationForm', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem('workerRegistrationForm');
    if (savedData) {
        const formData = JSON.parse(savedData);
        Object.keys(formData).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.value = formData[key];
            }
        });
    }
}

// Auto-save form data on input change
document.addEventListener('DOMContentLoaded', function() {
    // Load saved form data
    loadFormData();
    
    // Save form data on input change
    const formInputs = document.querySelectorAll('#workerForm input, #workerForm select, #workerForm textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', saveFormData);
        input.addEventListener('change', saveFormData);
    });
});

// Clear saved form data on successful submission
function clearSavedFormData() {
    localStorage.removeItem('workerRegistrationForm');
}