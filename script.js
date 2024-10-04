// Menú toggle para mobile
const toggleButton = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('open');
});
