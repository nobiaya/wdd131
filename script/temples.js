const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const h1 = document.querySelector('h1');

// This toggle menu visibility and button content
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	hambutton.setAttribute('aria-expanded', hambutton.classList.contains('show') ? 'true' : 'false');
	hambutton.textContent = hambutton.classList.contains('show') ? 'X' : '☰';
});

