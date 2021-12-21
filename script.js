const vidoeElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaScreen(){
    try{
        const mediaScream = await navigator.mediaDevices.getDisplayMedia();
        vidoeElement.srcObject = mediaScream;
        vidoeElement.onloadedmetadata = () => {
            vidoeElement.play()
        }
    }catch(error){
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await vidoeElement.requestPictureInPicture();
    button.disabled = false;
})

selectMediaScreen();