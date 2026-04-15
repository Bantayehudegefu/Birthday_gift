document.addEventListener("DOMContentLoaded", () => {

    // ===== MUSIC =====
    const birthdaySong = new Howl({
        src: ['audio/birthday_song.mp3'],
        loop: false, // ❗ VERY IMPORTANT (no auto loop)
        volume: 0.7,
        html5: true // better for long audio
    });

    let isPlaying = false;

    const playMusic = () => {
        if (!isPlaying) {
            birthdaySong.play();
            isPlaying = true;
        }
    };

    // Play once (after entering page)
    playMusic();

    // If browser blocked → play on first interaction
    const resumeAudio = () => {
        playMusic();
        document.removeEventListener("click", resumeAudio);
        document.removeEventListener("touchstart", resumeAudio);
    };

    document.addEventListener("click", resumeAudio);
    document.addEventListener("touchstart", resumeAudio);

    // ✅ RESTART ONLY AFTER SONG ENDS (NO OVERLAP)
    birthdaySong.on('end', () => {
        birthdaySong.play(); // plays again AFTER finishing
    });

    // ===== EMOJIS =====
    const emojis = document.querySelectorAll(".emoji");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const close = document.getElementById("close");

    // Animate emojis
    gsap.to(emojis, {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });

    // Click emoji → open image
    emojis.forEach(e => {
        e.addEventListener("click", () => {
            const img = e.getAttribute("data-image");
            if (!img) return;

            modalImg.src = img;
            modal.classList.remove("hidden");
        });
    });

    // Close modal
    close.addEventListener("click", () => modal.classList.add("hidden"));

    modal.addEventListener("click", e => {
        if (e.target === modal) modal.classList.add("hidden");
    });

});