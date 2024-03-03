const videoElement = document.getElementById('video');
const button= document.getElementById('btn');

const selectMedia = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error) {
        console.log("Error Statement: ", error);
    }
}

btn.addEventListener('click', async () => {
    btn.disabled = true;
    await videoElement.requestPictureInPicture();
    btn.disabled = false;
})

selectMedia();