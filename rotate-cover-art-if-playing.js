const stylesheet = document.styleSheets[0]; // get the first stylesheet
const keyframes = `
  @keyframes rotating {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
stylesheet.insertRule(keyframes, stylesheet.cssRules.length);

// Bad code
function checkPlayerStatus() {

  const mainPlayPauseButton = document.querySelector('.main-playPauseButton-button');
  const coverArt = document.querySelector('.cover-art');
  
  // Place this here in case the user expands the cover art
  coverArt.style.clipPath = 'circle(50% at 50% 50%)';
  coverArt.style.animation = 'rotating 5s linear infinite';

  if (mainPlayPauseButton.getAttribute('aria-label') === 'Pause') {
    coverArt.style.animationPlayState = 'running';
  } else {
    coverArt.style.animationPlayState = 'paused';
  }

  setTimeout(checkPlayerStatus, 50);
}

setTimeout(function() {
  const coverArt = document.querySelector('.cover-art');
  coverArt.style.animation = 'rotating 5s linear infinite';
  coverArt.style.animationPlayState = 'paused';
  coverArt.style.clipPath = 'circle(50% at 50% 50%)';

  checkPlayerStatus();
}, 2500)