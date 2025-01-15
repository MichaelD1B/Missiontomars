const twilightImage = document.getElementById('twilight');
    const videoOverlay = document.getElementById('videoOverlay');
    const videoPlayer = document.getElementById('videoPlayer');
    const closeBtn = document.getElementById('closeBtn');

    twilightImage.addEventListener('click', () => {
      videoOverlay.classList.add('active');
      videoPlayer.play();
    });

    closeBtn.addEventListener('click', () => {
      videoOverlay.classList.remove('active');
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    });