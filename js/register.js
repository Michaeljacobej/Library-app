const username = document.getElementById('username')
const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const password = document.getElementById('password')

const buttonLogin = document.getElementById('signin')
const buttonSignup = document.getElementById('signup')

const parentUsername = username.parentElement.parentElement
const parentFullname = fullname.parentElement.parentElement
const parentEmail    = email.parentElement.parentElement
const parentPassword = password.parentElement.parentElement

username.addEventListener('input', (e) => {
    parentUsername.children[2].classList.remove('show')
})

fullname.addEventListener('input', (e) => {
    parentFullname.children[2].classList.remove('show')
})


email.addEventListener('input', (e) => {
    parentEmail.children[2].classList.remove('show')
})

password.addEventListener('input', () => {
    parentPassword.children[2].classList.remove('show')
})


buttonSignup.addEventListener('click', (e) => 

{
    e.preventDefault()

    if (username.value == '') {
        parentUsername.children[2].classList.add('show')
        return
    }

    if (fullname.value == '') {
        parentFullname.children[2].classList.add('show')
        return
    }


    if (email.value == '') {
        parentEmail.children[2].classList.add('show')
        return
    }

    if (password.value == '') {
        parentPassword.children[2].classList.add('show')
        return
    }
    location.href = '/signin.html'
})


buttonLogin.addEventListener('click', (e) => {
    e.preventDefault()
    location.href = '/signin.html'
})

