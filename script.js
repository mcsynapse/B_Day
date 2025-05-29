window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('birthdayAudio');
  audio.play().catch(() => {
    document.body.addEventListener('click', () => audio.play(), { once: true });
  });

  launchConfetti();
  createBalloons();

  // Page flipping logic
  const pages = document.querySelectorAll('.page');
  let current = 0;
  pages.forEach((page, index) => {
    page.style.zIndex = pages.length - index;
    page.addEventListener('click', () => {
      if (index === current) {
        page.style.transform = 'rotateY(-180deg)';
        current++;
      }
    });
  });
});

function launchConfetti() {
  const confettiContainer = document.querySelector('.confetti');
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '8px';
    confetti.style.height = '8px';
    confetti.style.backgroundColor = pastelColor();
    confetti.style.top = `${Math.random() * 100}%`;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.opacity = Math.random();
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.animation = `fall ${3 + Math.random() * 5}s linear infinite`;
    confetti.style.borderRadius = '2px';
    confettiContainer.appendChild(confetti);
  }
}

function pastelColor() {
  const colors = ['#f48fb1', '#ce93d8', '#fff59d', '#ffccbc', '#b2ebf2'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createBalloons() {
  const container = document.querySelector('.balloons');
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${6 + Math.random() * 4}s`;
    balloon.style.backgroundColor = pastelColor();
    container.appendChild(balloon);
  }
}
