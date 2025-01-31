const videoOverlay = document.getElementById('videoOverlay');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const closeBtn = document.getElementById('closeBtn');

// Mapping of image IDs to video file paths
const videoMap = {
  bluelock: '/videos/Rin vs Sae.mp4',
  Kanye: '/videos/shinra vs sho.mp4',
  tobyfox: '/videos/Undertale OST_ 031 - Waterfall.mp4',
  LinkinPark: '/videos/LinkinPark.mp4',
  GreenDay: '/videos/GreenDay.mp4',
  Queen: '/videos/Queen.mp4',
  Abba: '/videos/Abba.mp4',
  MichaelJackson: '/videos/MichaelJackson.mp4',
  Weezer: '/videos/Weezer.mp4',
  Persona5: '/videos/Persona5.mp4'
};

// Attach click event listeners to each image
Object.keys(videoMap).forEach(id => {
  const image = document.getElementById(id);
  image.addEventListener('click', () => {
    videoSource.src = videoMap[id]; // Set the video source dynamically
    videoPlayer.load(); // Reload the video with the new source
    videoOverlay.classList.add('active');
    videoPlayer.play();
  });
});

// Close the video overlay
closeBtn.addEventListener('click', () => {
  videoOverlay.classList.remove('active');
  videoPlayer.pause();
  videoPlayer.currentTime = 0});