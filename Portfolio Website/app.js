// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for scroll entrance animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Typewriter Effect logic
const phrases = [
    "Software Engineer.",
    "Detail-Oriented Researcher.",
    "Complex Problem Solver."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    const spanElement = document.getElementById('typewriter');
    
    // Prevent errors if DOM doesn't have the typewriter element
    if(!spanElement) return;

    if (isDeleting) {
        spanElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 40; // deleting is faster
    } else {
        spanElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 80;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // pause at end of word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // pause before typing next word
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Start typing effect slightly delayed just to let UI render gracefully
setTimeout(typeWriter, 1000);
