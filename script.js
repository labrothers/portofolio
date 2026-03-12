/* ================= DARK MODE ================= */
function toggleTheme() {
    document.body.classList.toggle("light");
}

/* ================= SKILL ANIMATION ================= */

const skills = document.querySelectorAll(".skill-progress");

window.addEventListener("scroll", () => {

    skills.forEach(skill => {

        const rect = skill.getBoundingClientRect();

        if (rect.top < window.innerHeight) {
            skill.style.width = skill.dataset.width;
        }

    });

});


/* ================= MODAL PROJECT ================= */

function openModal(title) {

    const modalTitle = document.getElementById("modalTitle");
    const modal = document.getElementById("modal");

    modalTitle.innerText = title;
    modal.classList.add("active");

}

function closeModal() {

    const modal = document.getElementById("modal");

    modal.classList.remove("active");

}


/* ================= PARTICLE BACKGROUND ================= */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];


/* Generate Particles */

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
    });
}

/* Animation Loop */

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        p.x += p.dx;
        p.y += p.dy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.fill();

    });

    requestAnimationFrame(animate);

}

animate();