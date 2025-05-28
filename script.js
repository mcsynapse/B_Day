// Confetti animation on page load
window.onload = () => {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#FF7F50', '#FFFACD', '#D8BFD8']
  });

  // Auto start music with fade in
  const music = document.getElementById('bg-music');
  music.volume = 0;
  music.play();

  let vol = 0;
  const fadeIn = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      music.volume = Math.min(vol, 1);
    } else {
      clearInterval(fadeIn);
    }
  }, 200);

  // Loop with fade out/in every 20s
  setInterval(() => {
    let fadeOut = setInterval(() => {
      if (vol > 0) {
        vol -= 0.05;
        music.volume = Math.max(vol, 0);
      } else {
        clearInterval(fadeOut);
        music.currentTime = 0;
        music.play();

        // Fade back in
        let fadeInAgain = setInterval(() => {
          if (vol < 1) {
            vol += 0.05;
            music.volume = Math.min(vol, 1);
          } else {
            clearInterval(fadeInAgain);
          }
        }, 200);
      }
    }, 200);
  }, 20000);
};

confetti({
  particleCount: 100,
  spread: 80,
  origin: { y: 0.6 },
  colors: ['#FF7F50', '#FFFACD', '#D8BFD8']
});
