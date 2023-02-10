const videoElement = document.getElementById('video');
const button = document.getElementById('button');



//Promp to select a media stream, pass to video element, then play

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error){
        //catch Error here
    }
};

//Add Button trigger for stream
button.addEventListener('click', async () => {
    //Disable Button
    button.disabled = true;
    //Start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});

//Onload
selectMediaStream();