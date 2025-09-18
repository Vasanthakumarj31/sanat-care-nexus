// Main JavaScript file for Sanat Care Nexus

// Initialize tooltips and other Bootstrap components
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize all popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation to navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href && this.href !== window.location.href) {
                this.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>' + this.textContent;
            }
        });
    });
});

// Utility function to show toast notifications
function showToast(message, type = 'success') {
    const toastContainer = document.querySelector('.toast-container') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    
    const toastClass = type === 'success' ? 'bg-success' : type === 'error' ? 'bg-danger' : 'bg-info';
    const iconClass = type === 'success' ? 'bi-check-circle' : type === 'error' ? 'bi-exclamation-triangle' : 'bi-info-circle';
    
    toast.innerHTML = `
        <div class="toast-header ${toastClass} text-white">
            <i class="bi ${iconClass} me-2"></i>
            <strong class="me-auto">${type.charAt(0).toUpperCase() + type.slice(1)}</strong>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    // Remove toast element after it's hidden
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

// Create toast container if it doesn't exist
function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(container);
    return container;
}

// Language switching functionality (placeholder)
function switchLanguage(lang) {
    console.log('Switching to language:', lang);
    // In a real application, this would change the UI language
    showToast(`Language switched to ${lang}`, 'info');
}

// Theme switching functionality
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-theme');
    
    // Store preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    showToast(`Switched to ${isDark ? 'dark' : 'light'} theme`, 'info');
}

// Load saved theme preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Call on page load
document.addEventListener('DOMContentLoaded', loadThemePreference);

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    showToast('An unexpected error occurred. Please try again.', 'error');
});

// Online/Offline status
function updateOnlineStatus() {
    const status = navigator.onLine ? 'online' : 'offline';
    if (!navigator.onLine) {
        showToast('You are currently offline. Some features may not work.', 'error');
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Skip to main content with Tab
    if (e.key === 'Tab' && !e.shiftKey && document.activeElement === document.body) {
        const mainContent = document.querySelector('main') || document.querySelector('.container');
        if (mainContent) {
            mainContent.focus();
            e.preventDefault();
        }
    }
});

// Form validation utilities
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validatePassport(passport) {
    // Basic passport validation (adjust based on requirements)
    return passport.length >= 6 && passport.length <= 12;
}

// Export functions for use in other scripts
window.SanatCareNexus = {
    showToast,
    switchLanguage,
    toggleTheme,
    validateEmail,
    validatePhone,
    validatePassport
};

// Performance monitoring
function logPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart + 'ms');
            }, 0);
        });
    }
}

logPerformance();