const video = document.querySelector('video');
const playerControls = document.querySelector('div.player__controls');
const playButton = playerControls.querySelector('.player__button.toggle');
const skips = playerControls.querySelectorAll('button[data-skip]');
const totalProgress = playerControls.querySelector('.progress');
const filled = playerControls.querySelector('.progress__filled');
const ranges = playerControls.querySelectorAll('.player__slider');
filled.style.flexBasis = '0%';
function togglePlay() {
    if (video.paused) {video.play();}
    else {video.pause();}
}
function handleRangeUpdate() {
    video[this.name] = this.value;
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
skips.forEach(button => button.addEventListener('click', skip));
totalProgress.addEventListener('click', jumpToPercent);
video.addEventListener('pause', toggleButtonIcon);
video.addEventListener('play', toggleButtonIcon);
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));