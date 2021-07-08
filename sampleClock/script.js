let rootObj = document.querySelector('#root')
let [hourSpan, minutesSpan, secondsSpan] = document.querySelectorAll('.inner_Timer span')

rootObj.style.marginTop = `${window.innerHeight / 2 - rootObj.getBoundingClientRect().height}px`

setInterval(()=> {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    hourSpan.textContent = hours.toString();
    minutesSpan.textContent = minutes.toString()
    secondsSpan.textContent = seconds.toString()
    console.log(`${hours}: ${minutes}: ${seconds}`)
}, 1000)


