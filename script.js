// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// PRODUCT CATEGORY FILTER
// ============================================

const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card-full');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
}

// ============================================
// CONTACT FORM VALIDATION
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Clear previous errors
        clearErrors();

        // Validate
        let isValid = true;

        if (name === '') {
            showError('nameError', 'Name is required');
            isValid = false;
        }

        if (email === '') {
            showError('emailError', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        if (phone === '') {
            showError('phoneError', 'Phone number is required');
            isValid = false;
        } else if (!isValidPhone(phone)) {
            showError('phoneError', 'Please enter a valid phone number (numbers only)');
            isValid = false;
        }

        if (message === '') {
            showError('messageError', 'Message is required');
            isValid = false;
        }

        if (isValid) {
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        }
    });
}

// ============================================
// SIGNUP FORM VALIDATION
// ============================================

const signupForm = document.getElementById('signupForm');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('signupName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const pastry = document.getElementById('pastry').value;

        // Clear previous errors
        clearErrors();

        // Validate
        let isValid = true;

        if (name === '') {
            showError('signupNameError', 'Name is required');
            isValid = false;
        }

        if (email === '') {
            showError('signupEmailError', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('signupEmailError', 'Please enter a valid email address');
            isValid = false;
        }

        if (pastry === '') {
            showError('pastryError', 'Please select a preferred pastry');
            isValid = false;
        }

        if (isValid) {
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.style.display = 'block';
                signupForm.style.display = 'none';
            }
            setTimeout(() => {
                signupForm.reset();
                signupForm.style.display = 'block';
                successMessage.style.display = 'none';
            }, 3000);
        }
    });
}

// ============================================
// VALIDATION HELPER FUNCTIONS
// ============================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[0-9\-\+\(\)\s]*$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(error => {
        error.textContent = '';
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// CLOSE MOBILE MENU ON OUTSIDE CLICK
// ============================================

document.addEventListener('click', (e) => {
    if (hamburger && navMenu) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});script.jvvv
