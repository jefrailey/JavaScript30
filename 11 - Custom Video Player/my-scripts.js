const video = document.querySelector('video');
const playerControls = document.querySelector('div.player__controls');
const playButton = playerControls.querySelector('.player__button.toggle');
const volume = playerControls.querySelector('input[name="volume"]');
const playbackRate = playerControls.querySelector('input[name="playbackRate"]');
const skips = playerControls.querySelectorAll('button[data-skip]');
const totalProgress = playerControls.querySelector('.progress');
const filled = playerControls.querySelector('.progress__filled');
filled.style.flexBasis = '0%';
function togglePlay() {
    if (video.paused) {video.play();}
    else {video.pause();}
}
function changeRate() {
    video.playbackRate = this.value;
}
function changeVolume() {
    video.volume = this.value;
}
function skip() {
    video.currentTime = video.currentTime + Number(this.dataset.skip);
}
function updateProgress() {
    filled.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
}
function jumpToPercent(event) {
    video.currentTime = (event.offsetX / video.clientWidth) * video.duration;
}
function toggleButtonIcon() {
    const icon = this.paused ? '►' : '❚ ❚';
    playButton.textContent = icon;
}
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
playButton.addEventListener('click', togglePlay);
playbackRate.addEventListener('change', changeRate);
volume.addEventListener('change', changeVolume);
skips.forEach(button => button.addEventListener('click', skip));
totalProgress.addEventListener('click', jumpToPercent);
video.addEventListener('pause', toggleButtonIcon);
video.addEventListener('play', toggleButtonIcon);
