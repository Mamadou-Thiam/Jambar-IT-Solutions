document.addEventListener('DOMContentLoaded', () => {

    // ****************************************************
    // 1. GESTION DU MENU HAMBURGER (Responsivité Mobile)
    // ****************************************************
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    // Sélectionne tous les liens (a) à l'intérieur du menu
    const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];

    if (hamburgerBtn && navMenu) {
        // Ouvre/ferme le menu en basculant la classe 'active'
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Ferme le menu après avoir cliqué sur un lien (pour la navigation)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // S'assure de fermer le menu après la sélection d'un lien
                navMenu.classList.remove('active');
            });
        });
    }


    // ****************************************************
    // 2. GESTION DU BOUTON ET POP-UP WHATSAPP
    // ****************************************************
    const toggleButton = document.getElementById('whatsapp-toggle');
    const popup = document.getElementById('whatsapp-popup');
    const closeButton = popup ? popup.querySelector('.close-btn') : null;
    const whatsappLink = document.getElementById('whatsapp-link');

    // ** CONFIGURATION : Votre numéro de téléphone et message par défaut **
    // REMPLACEZ '22177XXXXXXX' par le numéro réel (avec code pays, sans '+')
    const phoneNumber = "22177XXXXXXX"; 
    const defaultMessage = "Bonjour Jambar IT Solutions, je souhaite avoir plus d'informations sur vos services.";

    // Créer le lien WhatsApp dynamique une fois que tous les éléments sont chargés
    if (whatsappLink) {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        whatsappLink.href = whatsappUrl;
    }
    
    // Fonction pour afficher/masquer le pop-up
    if (toggleButton && popup) {
        toggleButton.addEventListener('click', () => {
            // Toggle la classe 'show' pour afficher ou masquer
            popup.classList.toggle('show');
        });
    }
    
    // Fonction pour masquer le pop-up via le bouton de fermeture
    if (closeButton && popup) {
        closeButton.addEventListener('click', () => {
            popup.classList.remove('show');
        });
    }

    // ****************************************************
    // 3. GESTION DE LA SOUMISSION DU FORMULAIRE DE CONTACT
    // ****************************************************
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Récupérer les données (vous devrez intégrer une vraie API de contact ici)
            const nom = this.elements['nom'].value;
            
            // Alerte simple de confirmation pour l'exemple
            alert(`Merci ${nom} ! Votre message a été reçu. Jambar IT vous recontactera bientôt.`);
            
            // Réinitialiser le formulaire
            this.reset();
        });
    }

});