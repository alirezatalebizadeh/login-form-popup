let $ = document
const usernameInput = $.querySelector('#username')
const passwordInput = $.querySelector('#password')
const loginBtn = $.querySelector('#login-btn')
const form = $.querySelector('form')
var loginText = document.getElementById('login-text');


const toast = Swal.mixin({
    toast: true,
    position: 'top',
    timer: 2000,
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    }
})

usernameInput.addEventListener('blur', () => {
    if (usernameInput.value.length < 6) {
        toast.fire({
            title: 'یوزرنیم حداقل باید 6 کاراکتر داشته باشد',
            icon: 'error'
        })
    }
})

passwordInput.addEventListener('blur', () => {
    if (passwordInput.value.length < 8) {
        toast.fire({
            title: 'پسورد حداقل باید 8 کاراکتر داشته باشد',
            icon: 'error'
        })
    }
})

form.addEventListener('submit', event => {
    event.preventDefault()
    if (usernameInput.value.length < 6 || passwordInput.value.length < 8) {
        toast.fire({
            title: 'تعداد کاراکتر مقادیر ورودی را بررسی بفرمایید',
            icon: 'error'
        })
    } else {
        toast.fire({
            title: 'به پنل کاربری خود خوش امدید ',
            icon: 'success'
        })
    }
    clearInput()
})

function clearInput() {
    usernameInput.value = ''
    passwordInput.value = ''
}


var text = new Typewriter(loginText, {
    loop: true
})


text.typeString('فرم ورود')
    .pauseFor(500)
    .deleteAll()
    .start();