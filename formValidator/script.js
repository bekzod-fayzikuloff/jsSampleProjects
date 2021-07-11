let $formBlock = document.querySelector('.root')
let [$emailInput, $passwordInput] = document.querySelectorAll('.root input')
let $submitButton = document.querySelector('#login-button')

$formBlock.style.marginTop = `${window.innerHeight / 2 - $formBlock.getBoundingClientRect().height}px`


$submitButton.addEventListener('click', () => {
    if ($emailInput.value && $passwordInput.value) {
        console.log(1)
    } else {
        console.log('Go fuck yourself')
    }
})

