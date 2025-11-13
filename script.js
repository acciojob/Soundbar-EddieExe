//your JS code here. If required.
const soundNames = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const sound = {};
soundNames.forEach(name =>  {
	sounds[name] = new Audio(`./sounds/${name}.mp3`);
});

const stopSound = () => {
  Object.values(sounds).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
};

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function() {
    const text = this.textContent.trim().toLowerCase();
    stopSound();
    if (sounds[text]) {
      sounds[text].play();
    }
  });
});

document.querySelector('.stop').addEventListener('click', stopSound);