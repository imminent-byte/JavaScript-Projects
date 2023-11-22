const timeNodes = [...document.querySelectorAll('[data-time]')];

// .map takes in an array and exports an array
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [min, sec] = timeCode.split(":").map(parseFloat);
        return (min * 60) + sec;
    })
    // .reduce takes in an array but gives us whatever we want, number, string, object etc
    .reduce((total, vidTime) => total + vidTime)


let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);

// how many seconds are left after we have taken the hours
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);

secondsLeft = secondsLeft % 60;

const showTime = document.createElement('h1');
showTime.innerHTML = `THE TOTAL TIME IS ${hours} : ${mins} : ${secondsLeft}`;
document.body.append(showTime);