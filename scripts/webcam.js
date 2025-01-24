// Get the video element and its source
const videoElement = document.getElementById('cameraVideo');
const videoSource = document.getElementById('cameraSource');

// Define the camera feed times and loop duration (in seconds)
// For cameras that use the main video, only `startTime` and `loopDuration` are needed.
// For cameras that use a different video, also specify the `src` property.
const cameraTimes = {
    camera1: { startTime: 0, loopDuration: 12 }, // Uses main video
    camera2: { startTime: 274, loopDuration: 35 }, // Uses main video
    camera3: { startTime: 199, loopDuration: 36 }, // Uses main video
    camera4: { src: '/videos/camera 2.mp4' }, // Camera 2a uses a separate video
    camera5: { startTime: 126, loopDuration: 35 }, // Uses main video
    camera6: { startTime: 162, loopDuration: 35 }, // Uses main video
    camera7: { startTime: 54, loopDuration: 32 }, // Uses main video
    camera8: { startTime: 87, loopDuration: 36 }, // Uses main video
    camera9: { startTime: 237, loopDuration: 35 }, // Uses main video
    camera10: { startTime: 14, loopDuration: 51 }, // Uses main video
};

// Keep track of the current camera's start and loop duration
let currentStartTime = 0;
let currentLoopDuration = 0;

// Handle looping logic
function handleLoop() {
    if (videoElement.currentTime >= currentStartTime + currentLoopDuration) {
        videoElement.currentTime = currentStartTime; // Reset to startTime
        videoElement.play(); // Resume playback
    }
}

// Function to set and play the video with looping
function switchCamera(cameraId) {
    const cameraConfig = cameraTimes[cameraId];

    // If the camera uses a separate video, change the source
    if (cameraConfig.src) {
        videoSource.src = cameraConfig.src; // Set the new video source
        videoElement.load(); // Reload the video
        videoElement.play(); // Play the new video
        // No need to handle start time or loop for this case unless specified
    } else {
        // Update the current start and loop duration
        const { startTime, loopDuration } = cameraConfig;
        currentStartTime = startTime;
        currentLoopDuration = loopDuration;

        // Ensure the main video is loaded
        videoSource.src = '/videos/camera1.mp4'; // Main video file
        videoElement.load(); // Reload the video

        // Seek to the specified start time
        videoElement.currentTime = startTime;

        // Play the video
        videoElement.play();
    }
}

// Add the global timeupdate event listener
videoElement.addEventListener('timeupdate', handleLoop);

// Event listeners for camera buttons
document.getElementById('camera1').addEventListener('click', () => switchCamera('camera1'));
document.getElementById('camera2').addEventListener('click', () => switchCamera('camera2'));
document.getElementById('camera3').addEventListener('click', () => switchCamera('camera3'));
document.getElementById('camera4').addEventListener('click', () => switchCamera('camera4')); // Camera 2a
document.getElementById('camera5').addEventListener('click', () => switchCamera('camera5'));
document.getElementById('camera6').addEventListener('click', () => switchCamera('camera6'));
document.getElementById('camera7').addEventListener('click', () => switchCamera('camera7'));
document.getElementById('camera8').addEventListener('click', () => switchCamera('camera8'));
document.getElementById('camera9').addEventListener('click', () => switchCamera('camera9'));
document.getElementById('camera10').addEventListener('click', () => switchCamera('camera10'));






// video top left
var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }

  function stop(e) {
    var stream = video.srcObject;
    var tracks = stream.getTracks();
  
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }
  
    video.srcObject = null;
  }
  