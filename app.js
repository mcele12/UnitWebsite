// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const logo = document.getElementById("hero-logo");

// 1. Move the Logo through 3D space based on the overall scroll page position
gsap.to(logo, {
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: "bottom bottom",
    scrub: 1, // Smoothly ties animation progress to scroll speed
  },
  rotationY: 15, // Subtle 3D tilt
  rotationX: -10,
  scale: 1.25, // Zooms the warrior forward
  filter: "drop-shadow(0 0 45px rgba(0, 255, 102, 0.9))",
  ease: "none",
});

// 2. Animate individual content cards as they enter the screen
document.querySelectorAll(".card").forEach((card) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%", // Triggers when the card is 80% from the top of the viewport
      end: "top 30%",
      toggleActions: "play reverse play reverse", // Animates out if scrolling backwards
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
  });
});

// 3. Optional: Add interactive mouse parallax movement for extra depth when static
window.addEventListener("mousemove", (e) => {
  const xPos = (e.clientX / window.innerWidth - 0.5) * 30; // Max 30px tilt
  const yPos = (e.clientY / window.innerHeight - 0.5) * 30;

  gsap.to(logo, {
    x: xPos,
    y: yPos,
    duration: 0.5,
    ease: "power1.out",
    overwrite: "auto",
  });
});
