document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('myCanvas');
    const projectsModal = document.getElementById('projects-modal');
    const contactModal = document.getElementById('contact-modal');
    const aboutModal = document.getElementById('about-modal');
    const projectsBtn = document.getElementById('projects-button');
    const contactBtn = document.getElementById('contact-button');
    const aboutBtn = document.getElementById('about-button');
    const closeButtons = document.getElementsByClassName('close-button');
    
    // Function to reveal canvas
    function revealCanvas() {
        canvas.classList.add('visible');
    }

    // Reveal canvas immediately after page load
    revealCanvas();

    function openModal(modal) {
        modal.style.display = 'grid'; 
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.querySelector('.modal-content').style.transform = 'translateY(0)';
        }, 10);
    }
    
    function closeModal(modal) {
        modal.querySelector('.modal-content').style.transform = 'translateY(-50px)';
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
    
    projectsBtn.onclick = function() {
        openModal(projectsModal);
    }
    
    contactBtn.onclick = function() {
        openModal(contactModal);
    }

    aboutBtn.onclick = function() {
        openModal(aboutModal);
    }
    
    Array.from(closeButtons).forEach(button => {
        button.onclick = function() {
            closeModal(this.closest('.modal'));
        }
    });
    
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    }
});