const load = document.getElementById('load');
const play = document.getElementById('play')

const audioCtx = new AudioContext();
let buffer = null;

window.addEventListener('load', () => {
    
    const request = new XMLHttpRequest();
    request.open("GET", "Sound.mp3");
    request.responseType = "arraybuffer";
    
    request.onload = function() {
    let undecodedAudio = request.response;
    audioCtx.decodeAudioData(undecodedAudio, (data) => buffer = data);
    };
    
    request.send();
});


window.addEventListener('click', () => {

    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);
  
    source.start();
});
