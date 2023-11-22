window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// creating a new SpeechRecognition object
const recognition = new SpeechRecognition();
// this will give us the words we speak as we speak them rather than when we have finished speaking
recognition.interimResults = true;


let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = [...e.results]
        .map(result => result[0])
        .map(result => result.transcript)
        .join(" ");

        p.textContent = transcript;
        if(e.results[0].isFinal){
            p = document.createElement('p');
            words.appendChild(p);
        }
});

recognition.addEventListener('end', recognition.start);
recognition.start();