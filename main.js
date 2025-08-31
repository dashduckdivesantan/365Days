// main.js — minimal helpers used by pages
function goToEpistle() {
  // cinematic fade then navigate
  gsap.to("body", {
    duration: 0.9,
    opacity: 0,
    onComplete: () => {
      location.href = "epistle.html";
    },
  });
}
function goToCelebration() {
  gsap.to("body", {
    duration: 0.9,
    opacity: 0,
    onComplete: () => {
      location.href = "celebration.html";
    },
  });
}
