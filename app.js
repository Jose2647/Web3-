async function startMedia() {
  const constraints = {
    video: true,
    audio: true
  };

  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const video = document.getElementById('video');
    video.srcObject = stream;
  } catch (error) {
    console.error('Error accessing media devices.', error);
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}
startMedia();
