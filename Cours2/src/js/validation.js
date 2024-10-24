
// Regex pour valider l'e-mail et le mot de passe
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mot de passe avec chiffre, caractère spécial, 6-12 caractères
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,12}$/; 

// Fonction de validation pour le formulaire de connexion
function validateLoginForm() {
    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();
    let isValid = true;

    // On fait la vérification de l'e-mail
    if (!emailRegex.test(email)) {
        document.getElementById('email-login-error').textContent = 'Veuillez entrer un e-mail valide.';
        isValid = false;
    } else {
        document.getElementById('email-login-error').textContent = '';
    }

    // Vérification du mot de passe à 6 caractères plus simple
    if (password.length < 6) {
        document.getElementById('password-login-error').textContent = 'Le mot de passe doit comporter au moins 6 caractères.';
        isValid = false;
    } else {
        document.getElementById('password-login-error').textContent = '';
    }

    return isValid;
}

// Fonction pour la validation pour le formulaire d'inscription
function validateRegisterForm() {
    const email = document.getElementById('email-register').value.trim();
    const password = document.getElementById('password-register').value.trim();
    const confirmPassword = document.getElementById('password-confirm').value.trim();
    let isValid = true;

    // On vérifi si l'e-mail est valide 
    if (!emailRegex.test(email)) {
        document.getElementById('email-register-error').textContent = 'Veuillez entrer un e-mail valide.';
        isValid = false;
    } else {
        document.getElementById('email-register-error').textContent = '';
    }

    // On fait la vérification du mot de passe chiffre, caractère spécial, 6-12 caractères
    if (!passwordRegex.test(password)) {
        document.getElementById('password-register-error').textContent = 'Le mot de passe doit comporter 6 à 12 caractères, inclure un chiffre et un caractère spécial.';
        isValid = false;
    } else {
        document.getElementById('password-register-error').textContent = '';
    }

    // On fait la vérification si correspondance des mots de passe est ok 
    if (password !== confirmPassword) {
        document.getElementById('password-confirm-error').textContent = 'Les mots de passe ne correspondent pas.';
        isValid = false;
    } else {
        document.getElementById('password-confirm-error').textContent = '';
    }

    return isValid;
}

// Empêcher l'injection XSS
//La fonction sanitizeInput empêche l'insertion de balises <script> en remplaçant les caractères < et >
function sanitizeInput(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Gestion des formulaires lors de la soumission
document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const isValid = validateLoginForm();
    if (isValid) {
        alert('Connexion réussie!');
    }
});

document.getElementById('form-register').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const isValid = validateRegisterForm();
    if (isValid) {
        alert('Inscription réussie!');
    }
});

// Switcher entre les formulaires
document.getElementById('switch-btn').addEventListener('click', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm.classList.contains('d-none')) {
        loginForm.classList.remove('d-none');
        registerForm.classList.add('d-none');
        this.textContent = 'Passer à l\'inscription';
    } else {
        loginForm.classList.add('d-none');
        registerForm.classList.remove('d-none');
        this.textContent = 'Passer à la connexion';
    }
});
