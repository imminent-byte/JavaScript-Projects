const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    // Two classes, 1 we change the display with and the other we change the opacity with
    // With this we can get the getBoundingClientRect values before the content is shown by changing the opacity
    this.classList.add('trigger-enter');
    // When we enter into a function, the value of this changes
    // When we enter a function inside of another function the value of this changes again (check console log to check what it changes to)
    // But when we use arrow function, the value of this is inherited from the parent function
    setTimeout(() => {
        // so if we go really fast and end up bugging the code, this makes sure
        // if we dont actually entered, dont make it active
        if(this.classList.contains('trigger-enter')){
            this.classList.add('trigger-enter-active')
        }
    }, 150);
    background.classList.add('open');

    const dropDown = this.querySelector('.dropdown'); // We didnt do this with the rest of them on the top because we need the one that got hovered
    // Get coords
    const dropDownCoords = dropDown.getBoundingClientRect();
    // We get into bugs where the top of the dropdown wont be right in case we add something like an h1 to the top
    // This is because we getBoundingClientRect does not take those type of things into account, it relative to where on the page it is,
    // So also get nav coords and subtract that with the top and left of dropdown coords, incase anything happens
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropDownCoords.height,
        width: dropDownCoords.width,
        top: dropDownCoords.top - navCoords.top,
        left: dropDownCoords.left - navCoords.left,
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

}

function handleLeave(){
    this.classList.remove('trigger-enter');
    setTimeout(() => this.classList.remove('trigger-enter-active'), 150);
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));