// Define sounds at the top for global access
const soundNames = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const sounds = {};

// Initialize Audio objects safely
for (let name of soundNames) {
  sounds[name] = new Audio(`./sounds/${name}.mp3`);
}

// Stop all sounds
function stopAllSounds() {
  for (let key in sounds) {
    sounds[key].pause();
    sounds[key].currentTime = 0;
  }
}

// Set up event listeners
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const btnText = btn.textContent.trim().toLowerCase();
    if (btnText === 'stop') {
      stopAllSounds();
    } else if (sounds[btnText]) {
      stopAllSounds();
      sounds[btnText].play();
    }
  });
});