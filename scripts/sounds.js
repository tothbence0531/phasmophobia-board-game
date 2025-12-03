const audioButtonEl = document.querySelector(".audio-button");

// -------------------------
// MUSIC BOX
// -------------------------

const musicboxEl = document.querySelector(".musicbox-audio");

const playMusic = () => {
  musicboxEl.loop = true;
  musicboxEl.volume = 0.5;
  musicboxEl.currentTime = 0;
  musicboxEl.play().catch(() => {});
};

const stopMusic = () => {
  musicboxEl.pause();
};

const toggleMusic = () => {
  if (musicboxEl.paused) {
    playMusic();
    audioButtonEl.innerHTML = ` <i class="bx bx-volume-full"></i>`;
  } else {
    stopMusic();
    audioButtonEl.innerHTML = ` <i class="bx bx-volume-mute"></i>`;
  }
};

audioButtonEl.addEventListener("click", toggleMusic);

// -------------------------
// FOOTSTEPS
//
// playFootstep() plays a random footstep sound, with a new Audio object
//
// nextStapAt: number of pixels to scroll before playing the next footstep
// lastScroll: number of pixels scrolled down
// -------------------------

const footstepSources = document.querySelectorAll(".footstep-audio");

let nextStepAt = 800;
let lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const scrollDiff = Math.abs(currentScroll - lastScroll);

  if (!musicboxEl.paused && scrollDiff > nextStepAt) {
    playFootstep();
    lastScroll = currentScroll;

    nextStepAt = 700 + Math.random() * 250;
  }
});

function playFootstep() {
  if (footstepSources.length === 0) return;

  const randomSource =
    footstepSources[Math.floor(Math.random() * footstepSources.length)];

  const sound = new Audio(randomSource.src);

  sound.volume = 1.0;
  sound.play().catch(() => {});
}

// -------------------------
// UV LIGHT
// -------------------------

const uvButtonEls = document.querySelectorAll(".uv-light-button");
const uvAudioEl = document.querySelector(".uv-audio");

uvButtonEls.forEach((button) => {
  button.addEventListener("click", () => {
    if (!musicboxEl.paused) {
      uvAudioEl.play().catch(() => {});
    }
  });
});
