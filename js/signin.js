const email = document.getElementById('email')
const password = document.getElementById('password')
const buttonSignin = document.getElementById('signin')
const buttonSignup = document.getElementById('signup')

const parentEmail = email.parentElement.parentElement
const parentPassword = password.parentElement.parentElement

email.addEventListener('input', (e) => {
    parentEmail.children[2].classList.remove('show')
})

password.addEventListener('input', () => {
    parentPassword.children[2].classList.remove('show')
})

buttonSignin.addEventListener('click', (e) => {
    e.preventDefault()

    if (email.value !== 'michaeljacob6789@gmail.com') {
        parentEmail.children[2].classList.add('show')
        return
    }

    if (password.value !== 'abcd12345') {
        parentPassword.children[2].classList.add('show')
        return
    }
    location.href = '/home.html'
})

buttonSignup.addEventListener('click', (e) => {
    e.preventDefault()
    location.href = '/register.html'
})