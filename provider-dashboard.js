// Provider Dashboard JavaScript

// Mock data for demonstration
const mockWorkers = {
    'WID-2024-001': {
        id: 'WID-2024-001',
        name: 'Ahmad Rahman',
        nationality: 'Bangladesh',
        age: 28,
        lastVisit: '2024-01-15',
        status: 'active',
        allergies: ['Penicillin', 'Shellfish'],
        conditions: ['Hypertension'],
        emergencyContact: 'Fatima Rahman - +880123456789'
    },
    'WID-2024-002': {
        id: 'WID-2024-002',
        name: 'Raj Patel',
        nationality: 'India',
        age: 32,
        lastVisit: '2024-01-10',
        status: 'active',
        allergies: ['None known'],
        conditions: ['Diabetes Type 2'],
        emergencyContact: 'Priya Patel - +91987654321'
    },
    'WID-2024-003': {
        id: 'WID-2024-003',
        name: 'Maria Santos',
        nationality: 'Philippines',
        age: 29,
        lastVisit: '2024-01-12',
        status: 'active',
        allergies: ['Latex'],
        conditions: ['Asthma'],
        emergencyContact: 'Juan Santos - +63912345678'
    }
};

function searchWorker() {
    const workerId = document.getElementById('workerId').value.trim().toUpperCase();
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');
    
    if (!workerId) {
        alert('Please enter a Worker ID');
        return;
    }
    
    // Hide previous results
    searchResults.style.display = 'none';
    noResults.style.display = 'none';
    
    // Show loading state
    const searchBtn = document.querySelector('button[onclick="searchWorker()"]');
    const originalHTML = searchBtn.innerHTML;
    searchBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Searching...';
    searchBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        const worker = mockWorkers[workerId];
        
        if (worker) {
            // Populate worker data
            document.getElementById('workerName').textContent = worker.name;
            document.getElementById('displayWorkerId').textContent = worker.id;
            document.getElementById('workerNationality').textContent = worker.nationality;
            document.getElementById('workerAge').textContent = worker.age;
            document.getElementById('workerStatus').textContent = worker.status;
            document.getElementById('emergencyContact').textContent = worker.emergencyContact;
            
            // Populate allergies
            const allergiesList = document.getElementById('allergiesList');
            allergiesList.innerHTML = '';
            worker.allergies.forEach(allergy => {
                const badge = document.createElement('span');
                badge.className = 'badge bg-danger me-2';
                badge.textContent = allergy;
                allergiesList.appendChild(badge);
            });
            
            // Populate conditions
            const conditionsList = document.getElementById('conditionsList');
            conditionsList.innerHTML = '';
            worker.conditions.forEach(condition => {
                const badge = document.createElement('span');
                badge.className = 'badge bg-warning text-dark me-2';
                badge.textContent = condition;
                conditionsList.appendChild(badge);
            });
            
            // Show search results
            searchResults.style.display = 'block';
        } else {
            // Show no results
            noResults.style.display = 'block';
        }
        
        // Reset button state
        searchBtn.innerHTML = originalHTML;
        searchBtn.disabled = false;
    }, 1500);
}

// Allow Enter key to trigger search
document.getElementById('workerId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchWorker();
    }
});

// Tab activation event handlers
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any needed components
    console.log('Provider Dashboard loaded');
    
    // Auto-focus on Worker ID input
    document.getElementById('workerId').focus();
});

// Function to add a new visit (placeholder)
function addVisit() {
    alert('Add Visit functionality would open a modal or redirect to a visit form page.');
}

// Function to view full records (placeholder)
function viewFullRecords() {
    const workerId = document.getElementById('displayWorkerId').textContent;
    // In a real application, this would redirect to the health records page
    window.open(`health-records.html?id=${workerId}`, '_blank');
}

// Add click handlers to buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to buttons that will be created dynamically
    document.addEventListener('click', function(e) {
        if (e.target.textContent.includes('View Full Records')) {
            viewFullRecords();
        } else if (e.target.textContent.includes('Add Visit')) {
            addVisit();
        }
    });
});

// Real-time search suggestions (placeholder)
function showSearchSuggestions() {
    const input = document.getElementById('workerId');
    const value = input.value.toUpperCase();
    
    if (value.length >= 3) {
        // In a real application, this would show a dropdown with matching IDs
        console.log('Showing suggestions for:', value);
    }
}

// Add input event listener for search suggestions
document.getElementById('workerId').addEventListener('input', function() {
    const value = this.value;
    if (value.length >= 3) {
        showSearchSuggestions();
    }
});

// Print functionality for patient records
function printPatientRecord() {
    window.print();
}

// Export patient data (placeholder)
function exportPatientData() {
    alert('Export functionality would download patient data as PDF or Excel file.');
}