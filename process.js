// Animación del título de la página
const title = document.querySelector('.header h1');
title.addEventListener('mouseenter', () => {
	title.style.transform = 'rotate(360deg)';
});

// Animación de las tarjetas
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
	card.addEventListener('click', () => {
		card.classList.toggle('active');
	});
});
