const pressed = [];
const code = 'secretcode';

window.addEventListener("keyup", (e) => {
    pressed.push(e.key);
    // to make the array be the size of the code
    pressed.splice(-code.length - 1, pressed.length - code.length);
    if(pressed.join('').includes(code)){
        alert('found code');
    }
}) 