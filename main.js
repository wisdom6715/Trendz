/*async function main() {
  const buttonStart = document.querySelector('#buttonStart');
  const buttonStop = document.querySelector('#buttonStop');
  const videoLive = document.querySelector('#videoLive');
  const videoRecorded = document.querySelector('#videoRecorded');
  const videoLiveBackground = document.querySelector(".background");
  const videoRecordedBackground = document.querySelector(".recorded-video");

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    videoLive.srcObject = stream;

    if (!MediaRecorder.isTypeSupported('video/webm')) {
      console.warn('video/webm is not supported');
    }

    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'video/webm',
    });

    buttonStart.addEventListener('click', () => {
      mediaRecorder.start();
      buttonStart.setAttribute('disabled', '');
      buttonStop.removeAttribute('disabled');
    });

    buttonStop.addEventListener('click', () => {
      mediaRecorder.stop();
      buttonStart.removeAttribute('disabled');
      buttonStop.setAttribute('disabled', '');
    });

    mediaRecorder.addEventListener('dataavailable', async (event) => {
      const blob = new Blob([event.data], { type: 'video/webm' });
      const videoURL = URL.createObjectURL(blob);
      videoRecorded.src = videoURL;
      videoRecorded.onended = () => {
        videoRecorded.play();
      };

      // Upload the video to Firebase Storage
      try {
        const storageRef = firebase.storage().ref();
        const videoRef = storageRef.child('videos/' + Date.now() + '.webm');
        await videoRef.put(blob);
        const videoDownloadURL = await videoRef.getDownloadURL();
        console.log('Video uploaded to:', videoDownloadURL);
      } catch (error) {
        console.error('Error uploading video:', error);
      }
    });

    videoRecorded.addEventListener('click', () => {
      if (videoRecorded.paused) {
        videoRecorded.play();
      } else {
        videoRecorded.pause();
      }
    });

    buttonStop.addEventListener("click", function(){
      if(videoLiveBackground.style.display ==="block"){
        videoLiveBackground.style.display ="none" 
        if(videoRecordedBackground.style.display ==="none"){
          videoRecordedBackground.style.display ="block" 
        }
      } else{
        videoRecordedBackground.style.display ="block" 
        videoLiveBackground.style.display ="none"
      }
    });
  } catch (error) {
    console.error('Error accessing media devices:', error);
  }
}

main();


async function main() {
  const buttonStart = document.querySelector('#buttonStart');
  const buttonStop = document.querySelector('#buttonStop');
  const videoLive = document.querySelector('#videoLive');
  const videoRecorded = document.querySelector('#videoRecorded');

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    videoLive.srcObject = stream;

    if (!MediaRecorder.isTypeSupported('video/webm')) {
      console.warn('video/webm is not supported');
    }

    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'video/webm',
    });

    buttonStart.addEventListener('click', () => {
      mediaRecorder.start();
      buttonStart.setAttribute('disabled', '');
      buttonStop.removeAttribute('disabled');
    });

    buttonStop.addEventListener('click', () => {
      mediaRecorder.stop();
      buttonStart.removeAttribute('disabled');
      buttonStop.setAttribute('disabled', '');
    });

    mediaRecorder.addEventListener('dataavailable', async (event) => {
      const blob = new Blob([event.data], { type: 'video/webm' });
      const videoURL = URL.createObjectURL(blob);
      videoRecorded.src = videoURL;

      videoRecorded.onended = () => {
        videoRecorded.play();
      };

      // Upload the video to Firebase Storage
      try {
        const storageRef = firebase.storage().ref();
        const videoRef = storageRef.child('videos/' + Date.now() + '.webm');
        console.log('Uploading video...');
        const snapshot = await videoRef.put(blob);
        const videoDownloadURL = await snapshot.ref.getDownloadURL();
        console.log('Video uploaded to:', videoDownloadURL);
      } catch (error) {
        console.error('Error uploading video:', error);
      }
    });

    videoRecorded.addEventListener('click', () => {
      if (videoRecorded.paused) {
        videoRecorded.play();
      } else {
        videoRecorded.pause();
      }
    });
  } catch (error) {
    console.error('Error accessing media devices:', error);
  }
}

main();
*/




async function main() {
  const buttonStart = document.querySelector('#buttonStart');
  const buttonStop = document.querySelector('#buttonStop');
  const videoLive = document.querySelector('#videoLive');
  const videoRecorded = document.querySelector('#videoRecorded');
  const videoLiveBackground = document.querySelector(".background");
  const videoRecordedBackground = document.querySelector(".recorded-video");

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    videoLive.srcObject = stream;

    if (!MediaRecorder.isTypeSupported('video/webm')) {
      console.warn('video/webm is not supported');
    }

    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'video/webm',
    });


    buttonStart.addEventListener('click', () => {
      mediaRecorder.start();
      buttonStart.setAttribute('disabled', '');
      buttonStop.removeAttribute('disabled');
    });

    buttonStop.addEventListener('click', () => {
      mediaRecorder.stop();
      buttonStart.removeAttribute('disabled');
      buttonStop.setAttribute('disabled', '');
    });

    buttonStop.addEventListener("click", function(){
      if(videoLiveBackground.style.display ==="block"){
        videoLiveBackground.style.display ="none" 
        if(videoRecordedBackground.style.display ==="none"){
          videoRecordedBackground.style.display ="block" 
        }
      } else{
        videoRecordedBackground.style.display ="block" 
        videoLiveBackground.style.display ="none"
      }
    });

    mediaRecorder.addEventListener('dataavailable', async (event) => {
      const blob = new Blob([event.data], { type: 'video/webm' });
      const videoURL = URL.createObjectURL(blob);
      videoRecorded.src = videoURL;
      videoRecorded.onended = () => {
        videoRecorded.play();
      };

      // Upload the video to Firebase Storage
      try {
        const storageRef = firebase.storage().ref();
        const videoRef = storageRef.child('videos/' + Date.now() + '.webm');
        await videoRef.put(blob);
        const videoDownloadURL = await videoRef.getDownloadURL();
        console.log('Video uploaded to:', videoDownloadURL);
      } catch (error) {
        console.error('Error uploading video:', error);
      }
    });

    videoRecorded.addEventListener('click', () => {
      if (videoRecorded.paused) {
        videoRecorded.play();
      } else {
        videoRecorded.pause();
      }
    });
  } catch (error) {
    console.error('Error accessing media devices:', error);
  }
}

main();