// script.js

// Get the video element and its source
const videoElement = document.getElementById('cameraVideo');
const videoSource = document.getElementById('cameraSource');

// Define the camera feed times and loop duration (in seconds)
const cameraTimes = {
    camera1: { startTime: 0, loopDuration: 10 }, // Camera 1 starts at 0s and loops for 10s
    camera2: { startTime: 30, loopDuration: 10 }, // Camera 2 starts at 30s and loops for 10s
    camera3: { startTime: 60, loopDuration: 10 }, // Camera 3 starts at 60s and loops for 10s
};

// Function to set and play the video
function switchCamera(cameraId) {
    const { startTime, loopDuration } = cameraTimes[cameraId];

    // Change the video source to the selected camera
    videoSource.src = `/videos/camera1.mp4`;  // Assumes you have camera1.mp4, camera2.mp4, etc.
    videoElement.load(); // Reload the video

    // Seek to the specified start time
    videoElement.currentTime = startTime;

    // Play the video
    videoElement.play();

    // Loop the video for the specified duration
    setTimeout(() => {
        videoElement.pause(); // Stop the video after the loop duration
    }, loopDuration * 1000); // Loop duration in milliseconds
}

// Event listeners for camera buttons
document.getElementById('camera1').addEventListener('click', () => switchCamera('camera1'));
document.getElementById('camera2').addEventListener('click', () => switchCamera('camera2'));
document.getElementById('camera3').addEventListener('click', () => switchCamera('camera3'));

// Add more cameras as needed
