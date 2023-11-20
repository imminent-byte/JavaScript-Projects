const pressed = [];
const code = 'secretcode';

window.addEventListener("keyup", (e) => {
    pressed.push(e.key);
    //                   -7       , lets say 5     - 6 doesnt work
    //                   -7       ,    now   7     - 6 meaning remove 1 from - 7, MEANING remove the first and leave the remaining
    pressed.splice(-code.length - 1, pressed.length - code.length);
    if(pressed.join('').includes(code)){
        alert('found code');
    }
}) 