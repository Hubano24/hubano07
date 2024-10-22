document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Votre message a été envoyé à fkora@gouv.bj');
    document.getElementById('message').value = ''; // Réinitialiser le champ de message
});

document.getElementById('request-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Votre requête a été envoyée. Nous vous contacterons bientôt.');
    document.getElementById('user-email').value = '';
    document.getElementById('user-phone').value = '';
    document.getElementById('user-message').value = '';
    document.getElementById('user-file').value = ''; // Réinitialiser le champ de fichier
});
