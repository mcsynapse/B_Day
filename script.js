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
  music.volume = 100;
  music.play();
  
};

confetti({
  particleCount: 100,
  spread: 80,
  origin: { y: 0.6 },
  colors: ['#FF7F50', '#FFFACD', '#D8BFD8']
});
