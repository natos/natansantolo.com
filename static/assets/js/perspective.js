document.addEventListener('mousemove', function(e) {
  const x = e.clientX / window.innerWidth - 0.5;  // -0.5 to 0.5
  const y = e.clientY / window.innerHeight - 0.5; // -0.5 to 0.5
  // Adjust the multiplier for more/less tilt
  const rotateY = x * 24; // left/right
  const rotateX = -y * 24; // up/down (invert so up is negative)
  document.querySelectorAll('.natan-photo').forEach(el => {
    el.style.setProperty('--photo-rotate-x', `${rotateX}deg`);
    el.style.setProperty('--photo-rotate-y', `${rotateY}deg`);
  });
});