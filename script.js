// Smooth Scroll za navigaciju
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animacija brojača korisnika
function animateCounter() {
    const counter = document.getElementById('user-count');
    const target = 2200;
    const speed = 100;

    const updateCount = () => {
        const current = +counter.innerText;
        const increment = target / speed;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
}

// Pokreni brojač kada se učita stranica
window.onload = animateCounter;

// Dodatna logika za sticky header efekat pri scrollu
window.addEventListener('scroll', () => {
    const header = document.querySelector('.glass-header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 11, 16, 0.95)';
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'rgba(10, 11, 16, 0.8)';
        header.style.padding = '15px 0';
    }
});
