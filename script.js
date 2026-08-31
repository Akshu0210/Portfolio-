// ===============================
// Mobile Navigation
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("show");
    });
});


// ===============================
// Scroll Animation
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// ===============================
// Active Navigation
// ===============================

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Console Message
// ===============================

console.log(
    "Welcome to Akshaya D's Portfolio 🚀"
);
