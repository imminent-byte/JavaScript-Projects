const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    // This gives us a promise so we have to handle it like a promise
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(localMediaStream => {
            // This will conver the media stream into something that the video player can understand.
            // URL.createObjectURL() static method creates a string containing a URL representing the object given in the parameter.
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(error => {
            console.log("Give permission to use webcam",error);
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // Take the pixels
        let pixels = ctx.getImageData(0, 0, width, height); 
        // change the pixels
        pixels = redEffect(pixels);
        // place the pixels back
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    // Sound
    snap.currentTime = 0;
    snap.play();

    // Take data aout of the canvas
    // HTMLCanvasElement.toDataURL() method returns a data URL containing a representation of the image in the format specified by the type parameter
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'image');
    link.innerHTML = `<img src="${data}" alt="Image"/>`;
    strip.insertBefore(link, strip.firstChild());
}

function redEffect(pixels){
    // +4 becuase then we have access to red, green, blue and alpha values
    // The getImageData gives u and object back where in there, data is a special kind of array, we cant use .map so we use for loop
    for(let i = 0; i < pixels.data.length; i += 4){
        pixels.data[i + 0] += 100; // RED
        pixels.data[i + 1] -= 50;  // GREEN
        pixels.data[i + 2] *= 0.5; // BLUE
    }
    return pixels;
}

function rgbSplit(pixels){
    for(let i = 0; i < pixels.data.length; i += 4){
        pixels.data[i - 150 ] = pixels.data[i + 0]; // RED
        pixels.data[i + 100 ] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 150 ] = pixels.data[i + 2]; // BLUE
    }
    return pixels;
}


getVideo();

// when the video loads and starts playing, it emmits the canplay event and in return we start the paintToCanvas function
video.addEventListener('canplay', paintToCanvas);