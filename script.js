// Wait for the full page content (DOM + media) to load
window.onload = () => {
  const music = document.getElementById('bg-music');

  // Wait until the audio can play through without buffering
  music.addEventListener('canplaythrough', () => {
    music.volume = 1.0; // Full volume
    music.play();

    // Confetti animation after music is ready
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FF7F50', '#FFFACD', '#D8BFD8']
    });
  });

  // Force the browser to start loading the audio
  music.load();
};

confetti({
  particleCount: 100,
  spread: 80,
  origin: { y: 0.6 },
  colors: ['#FF7F50', '#FFFACD', '#D8BFD8']
});
