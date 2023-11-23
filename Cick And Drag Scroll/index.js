const slider = document.querySelector('.items');
let isDown = false;
let startX; // Where the user have done the first click down, the point from where the user has started dragging
let scrollLeft;


// we capture the values when mouse down then reference it when we mouse move
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft; // if there is any margin or anything between the page and the items div, we handle that offset.
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault(); // stops selecting of text or anything by default
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // this tells us how far have we moved from that initial space
    slider.scrollLeft = scrollLeft - walk;
});