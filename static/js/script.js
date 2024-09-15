document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('myCanvas');
    const projectsModal = document.getElementById('projects-modal');
    const contactModal = document.getElementById('contact-modal');
    const projectsBtn = document.getElementById('projects-button');
    const contactBtn = document.getElementById('contact-button');
    const closeButtons = document.getElementsByClassName('close-button');
    
    // Function to reveal canvas
    function revealCanvas() {
        canvas.classList.add('visible');
    }

    // Reveal canvas immediately after page load
    revealCanvas();

    // Or, Reveal canvas after a short delay, in milliseconds, if the above doesn't work
    // setTimeout(revealCanvas, 300);
	
	function openModal(modal) {
		modal.style.display = 'block';
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