// Health Records JavaScript

// Mock health records data
const mockHealthRecords = {
    'WID-2024-001': {
        id: 'WID-2024-001',
        name: 'Ahmad Rahman',
        dateOfBirth: '1996-03-15',
        nationality: 'Bangladesh',
        bloodType: 'O+',
        status: 'Active',
        allergies: ['Penicillin', 'Shellfish'],
        conditions: ['Hypertension'],
        emergencyContact: 'Fatima Rahman - +880123456789',
        medicalHistory: [
            {
                date: '2024-01-15',
                title: 'Routine Health Checkup',
                description: 'Regular health screening. Blood pressure: 140/90 mmHg. Weight: 70kg. Height: 175cm.',
                provider: 'Dr. Smith - City Hospital'
            },
            {
                date: '2023-12-10',
                title: 'Hypertension Diagnosis',
                description: 'Initial diagnosis of hypertension. Started on medication. Follow-up recommended in 3 months.',
                provider: 'Dr. Johnson - Medical Center'
            }
        ],
        medications: [
            {
                name: 'Lisinopril',
                dosage: '10mg',
                frequency: 'Once daily',
                prescribedDate: '2023-12-10',
                status: 'Active'
            },
            {
                name: 'Amlodipine',
                dosage: '5mg',
                frequency: 'Once daily',
                prescribedDate: '2024-01-15',
                status: 'Active'
            }
        ],
        vaccinations: [
            {
                name: 'Hepatitis B',
                date: '2023-11-15',
                status: 'completed'
            },
            {
                name: 'Tetanus',
                date: '2023-10-20',
                status: 'completed'
            },
            {
                name: 'Influenza',
                dueDate: '2024-10-01',
                status: 'due'
            },
            {
                name: 'COVID-19',
                date: '2024-01-05',
                status: 'completed'
            }
        ]
    },
    'WID-2024-002': {
        id: 'WID-2024-002',
        name: 'Raj Patel',
        dateOfBirth: '1992-08-22',
        nationality: 'India',
        bloodType: 'A+',
        status: 'Active',
        allergies: ['None known'],
        conditions: ['Diabetes Type 2'],
        emergencyContact: 'Priya Patel - +91987654321',
        medicalHistory: [
            {
                date: '2024-01-10',
                title: 'Diabetes Follow-up',
                description: 'Blood glucose levels stable. HbA1c: 7.2%. Continue current medication.',
                provider: 'Dr. Johnson - Diabetes Clinic'
            }
        ],
        medications: [
            {
                name: 'Metformin',
                dosage: '500mg',
                frequency: 'Twice daily',
                prescribedDate: '2023-11-20',
                status: 'Active'
            }
        ],
        vaccinations: [
            {
                name: 'Hepatitis B',
                date: '2023-10-15',
                status: 'completed'
            },
            {
                name: 'Influenza',
                date: '2023-09-20',
                status: 'completed'
            }
        ]
    }
};

function loadHealthRecords() {
    const recordId = document.getElementById('healthRecordId').value.trim().toUpperCase();
    const recordsContent = document.getElementById('healthRecordsContent');
    const noRecordsFound = document.getElementById('noRecordsFound');
    
    if (!recordId) {
        alert('Please enter a Worker ID');
        return;
    }
    
    // Hide previous results
    recordsContent.style.display = 'none';
    noRecordsFound.style.display = 'none';
    
    // Show loading state
    const loadBtn = document.querySelector('button[onclick="loadHealthRecords()"]');
    const originalHTML = loadBtn.innerHTML;
    loadBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Loading...';
    loadBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        const record = mockHealthRecords[recordId];
        
        if (record) {
            // Populate patient info
            document.getElementById('patientName').textContent = record.name;
            document.getElementById('patientId').textContent = record.id;
            document.getElementById('patientDob').textContent = record.dateOfBirth;
            document.getElementById('patientNationality').textContent = record.nationality;
            document.getElementById('patientBloodType').textContent = record.bloodType;
            document.getElementById('patientStatus').textContent = record.status;
            
            // Show records content
            recordsContent.style.display = 'block';
            
            // Scroll to records
            recordsContent.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Show no records found
            noRecordsFound.style.display = 'block';
            noRecordsFound.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Reset button state
        loadBtn.innerHTML = originalHTML;
        loadBtn.disabled = false;
    }, 1500);
}

// Allow Enter key to trigger search
document.getElementById('healthRecordId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        loadHealthRecords();
    }
});

// Check URL parameters for pre-filled ID
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (id) {
        document.getElementById('healthRecordId').value = id;
        loadHealthRecords();
    }
    
    // Auto-focus on input
    document.getElementById('healthRecordId').focus();
});

// Print functionality
function printHealthRecords() {
    window.print();
}

// Export functionality (placeholder)
function exportHealthRecords() {
    alert('Export functionality would download health records as PDF file.');
}

// Share records functionality (placeholder)
function shareHealthRecords() {
    if (navigator.share) {
        navigator.share({
            title: 'Health Records',
            text: 'Sharing health records from Sanat Care Nexus',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareUrl = window.location.href;
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Health records link copied to clipboard!');
        }).catch(() => {
            alert('Unable to copy link. Please copy the URL manually: ' + shareUrl);
        });
    }
}

// Update last accessed timestamp
function updateLastAccessed() {
    const now = new Date();
    localStorage.setItem('lastHealthRecordsAccess', now.toISOString());
}

// Emergency contact quick dial (placeholder)
function callEmergencyContact() {
    const contact = document.querySelector('#overview .card-body p').textContent;
    const phoneMatch = contact.match(/\+[\d\s-]+/);
    
    if (phoneMatch) {
        const phone = phoneMatch[0].replace(/\s/g, '');
        window.location.href = `tel:${phone}`;
    }
}

// Add emergency contact button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add click handler for emergency contact section
    const emergencySection = document.querySelector('#overview .card:last-child .card-body');
    if (emergencySection) {
        emergencySection.style.cursor = 'pointer';
        emergencySection.addEventListener('click', callEmergencyContact);
    }
});

// Medical alert notification
function showMedicalAlert() {
    const alertBadges = document.querySelectorAll('.badge.bg-danger');
    if (alertBadges.length > 0) {
        const allergies = Array.from(alertBadges).map(badge => badge.textContent).join(', ');
        
        // Create alert notification
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger alert-dismissible fade show position-fixed';
        alertDiv.style.cssText = 'top: 80px; right: 20px; z-index: 1050; max-width: 300px;';
        alertDiv.innerHTML = `
            <strong><i class="bi bi-exclamation-triangle me-2"></i>Medical Alert!</strong><br>
            Patient has allergies: ${allergies}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alertDiv);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 10000);
    }
}

// Show medical alert when records are loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show alert after a short delay when viewing overview tab
    document.getElementById('overview-tab').addEventListener('shown.bs.tab', function() {
        setTimeout(showMedicalAlert, 1000);
    });
});