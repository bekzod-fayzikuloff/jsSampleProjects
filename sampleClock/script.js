let rootObj = document.querySelector('#root')
let [hourSpan, minutesSpan, secondsSpan] = document.querySelectorAll('.inner_Timer span')

rootObj.style.marginTop = `${window.innerHeight / 2 - rootObj.getBoundingClientRect().height}px`

setInterval(()=> {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }

    hourSpan.textContent = hours.toString();
    minutesSpan.textContent = minutes.toString();
    secondsSpan.textContent = seconds;
    console.log(`${hours}: ${minutes}: ${seconds}`)
}, 1000)


