document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion du Bouton/Pop-up WhatsApp
    const toggleButton = document.getElementById('whatsapp-toggle');
    const popup = document.getElementById('whatsapp-popup');
    const closeButton = popup.querySelector('.close-btn');
    const whatsappLink = document.getElementById('whatsapp-link');

    // **Configuration : Votre numéro de téléphone et message par défaut**
    const phoneNumber = "22177XXXXXXX"; // Remplacez par le numéro de Jambar IT (avec code pays, sans '+')
    const defaultMessage = "Bonjour Jambar IT Solutions, je souhaite avoir plus d'informations sur vos services.";

    // Créer le lien WhatsApp dynamique
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    whatsappLink.href = whatsappUrl;

    // Fonction pour afficher/masquer le pop-up
    toggleButton.addEventListener('click', () => {
        // Toggle la classe 'show' pour afficher ou masquer
        popup.classList.toggle('show');
    });

    // Fonction pour masquer le pop-up via le bouton de fermeture
    closeButton.addEventListener('click', () => {
        popup.classList.remove('show');
    });


    // 2. Gestion de la soumission du formulaire de contact (Exemple)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Récupérer les données du formulaire (ici, juste pour l'exemple)
            const nom = this.elements['nom'].value;
            const email = this.elements['email'].value;
            const message = this.elements['message'].value;
            
            // *** IMPORTANT : Dans un vrai site, vous enverriez ces données à un serveur ***
            // Pour l'instant, on affiche une alerte simple
            alert(`Merci ${nom} ! Votre message a été reçu. Nous vous recontacterons à l'adresse ${email}.`);
            
            // Réinitialiser le formulaire
            this.reset();
        });
    }

});