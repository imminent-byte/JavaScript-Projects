const hero = document.querySelector('.hero');
const text = document.querySelector('.hero h1');
const walk = 60; // 100px
let hue = 0;

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height} = hero;
    let { offsetX: x, offsetY: y} = e;
    // this will always be hero because that is where we listen for event
    // e.target will change and tell us what is the current target for the event object
    // So if they are different we would change the x and y of event and add the x and y of the e.target
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;

    }
    // By adding these offsets to the x and y coordinates, the code effectively adjusts the mouse position to be relative to the hero element's position rather than the child element's position. 

    // Calculated based on the mouse position relative to the size of the hero element.
                            //  calculates the percentage of the mouse position relative to the width of the hero element and scales it to the range defined by walk.
                                                  //  (walk / 2) is subtracted to center the range of the offset around 0. This ensures that the maximum positive and negative offsets are symmetric.
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 hsl(${hue}, 100%, 50%)`;
    hue++;
    
}

hero.addEventListener('mousemove', shadow);