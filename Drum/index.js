// keyboard functionality
window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;

    // killing the time if sum1 clicks b4 the prev sound ends
    audio.currentTime=0;
    audio.play();
    
    key.classList.add('playing');
});

// removing the class after animation ends
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', function(e) {
        // if we check the console for event here, the longest there is transform, so only remove the class after that ends
        if(e.propertyName !== 'transform') return;


        this.classList.remove('playing');
    });
});