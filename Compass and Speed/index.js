const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// This is a success callback, when the person gives us access to their location
navigator.geolocation.watchPosition((data) => {
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    // When the the person does not give access to their location
    alert("Allow location to get access to Compass and Speed");
});