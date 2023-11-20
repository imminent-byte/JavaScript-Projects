const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    // Since there are 60 seconds in a minute and 360 degrees in a circle, (seconds / 60) * 360 converts the seconds into degrees. 
    const secondsDegrees = (seconds / 60) * 360 + 90; // Adding 90 degrees (+ 90) offsets the default 90 degrees position.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    // The minuteDegrees are calculated by taking the minutes divided by 60 (since there are 60 minutes in an hour), multiplying by 360 (since each hour represents 360 degrees in a full circle)
    // By dividing the seconds by 60, we are converting the seconds into degrees. Since there are 60 seconds in a minute and 360 degrees in a full circle, dividing the seconds by 60 yields a fraction of the full rotation of the minute hand.
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = now.getHours();
    // The hourDegrees are calculated by taking the hours modulo 12 (to convert it to a 12-hour format), multiplying by 30 (since each hour represents 30 degrees in a 12-hour clock)
    // Since there are 60 minutes in an hour and 30 degrees in each hour increment (360 degrees ÷ 12 hours), dividing the minutes by 2 (60 / 30 = 2) yields a value that represents the partial rotation of the hour hand between each hour marker.
    const hourDegrees = (hours % 12) * 30 + (minutes / 2) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setDate();

setInterval(setDate, 1000);