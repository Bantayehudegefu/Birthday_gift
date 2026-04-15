const enterBtn = document.getElementById("enterBtn");

// Initialize Howler music
const hotSong = new Howl({
    src: ['audio/hot_snippet.mp3'],
    loop: true,
    volume: 0.7
});

// Mobile-friendly autoplay
window.addEventListener("load", () => {
    hotSong.play().catch(() => {
        const resumeAudio = () => {
            hotSong.play();
            window.removeEventListener("touchstart", resumeAudio);
            window.removeEventListener("click", resumeAudio);
        };
        window.addEventListener("touchstart", resumeAudio, { once: true });
        window.addEventListener("click", resumeAudio, { once: true });
    });
});

// Handle Get In button click
enterBtn.addEventListener("click", () => {
    gsap.to(hotSong, {
        volume: 0,
        duration: 1.5,
        onComplete: () => {
            hotSong.stop();
            window.location.href = "universe.html";
        }
    });

    gsap.to(".main-ui", {
        opacity: 0,
        duration: 1.5
    });
});

// --- Particles.js background ---
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80 },
        "size": { "value": 3 },
        "move": { "speed": 1.5 },
        "line_linked": { "enable": false },
        "color": { "value": "#ffffff" },
        "opacity": { "value": 0.7 }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "repulse" }
        }
    }
});

// --- Floating sparkles ---
const sparkleCount = 15;
for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.textContent = "✨"; 
    sparkle.style.left = Math.random() * 90 + "%";
    sparkle.style.top = Math.random() * 85 + "%"; // a bit higher for top space
    sparkle.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(sparkle);
}