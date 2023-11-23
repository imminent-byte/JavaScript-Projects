let countDown; // This contains all the seconds remaining

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // clear any existing timer
    clearInterval(countDown);
    const now = Date.now(); // Gets current time
    const then = now + seconds * 1000; // now is in ms so we convert that into seconds
    displayTimeleft(seconds); // display the first second (it dsnt shows with interval)
    displayEndTime(then);

    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if the fucntion should be stopped
        if(secondsLeft < 0) { 
            clearInterval(countDown);
            return;
        }
        
        displayTimeleft(secondsLeft);
    }, 1000)

}

function displayTimeleft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp); // How we change raw timestamp of miliseconds (a number) into an actual date
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}
buttons.forEach(button => button.addEventListener('click', startTimer));

// We can access html tag using its name
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60); // We take minutes as input so we convert them into seconds
    this.reset();
})