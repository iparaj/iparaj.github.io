const CORRECT_PASSWORD = 'photo123';
let currentPhotoUrl = null;
let passwordAuthenticated = false;

const modal = document.getElementById('passwordModal');
const passwordInput = document.getElementById('passwordInput');
const submitBtn = document.getElementById('submitPassword');
const cancelBtn = document.getElementById('cancelPassword');

// Handle protected link clicks
document.querySelectorAll('.protected-link').forEach(link => {
    link.style.cursor = 'pointer';
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Check if user is already authenticated in this session
        if (sessionStorage.getItem('photoAuthenticated') === 'true') {
            window.open(link.dataset.url, '_blank');
        } else {
            currentPhotoUrl = link.dataset.url;
            modal.style.display = 'flex';
            passwordInput.focus();
            passwordInput.value = '';
        }
    });
});

// Handle password submission
submitBtn.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Handle cancel button
cancelBtn.addEventListener('click', closeModal);

// Check password function
function checkPassword() {
    const enteredPassword = passwordInput.value;
    
    if (enteredPassword === CORRECT_PASSWORD) {
        // Password correct
        sessionStorage.setItem('photoAuthenticated', 'true');
        window.open(currentPhotoUrl, '_blank');
        closeModal();
    } else {
        // Password incorrect
        alert('Incorrect password. Please try again.');
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// Close modal function
function closeModal() {
    modal.style.display = 'none';
    passwordInput.value = '';
    currentPhotoUrl = null;
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
