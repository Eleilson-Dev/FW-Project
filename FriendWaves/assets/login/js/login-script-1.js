const email = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const eyeoutline = document.querySelector('.eye-svg')
const check = document.querySelector('.eye-svg')
const enter = document.querySelector('#bnt')
const form = document.querySelector('.card-login')

const campoVazioEmail = document.querySelector('#campoVazioEmail')
const campoVazioSenha = document.querySelector('#campoVazioSenha')

const emailValido = () => email.value
const senhaValida = () => passwordInput.value

const validateInputPassword = () => passwordInput.value.trim().length > 0;
const validateInputEmail = () => email.value.trim().length > 0;

const keyUpDisplayEye = () => {

    check.classList.add('display-eye-svg')

    if (passwordInput.value == "") {
        check.classList.remove('display-eye-svg')
    }

}

const emailErro = () => {
    const InputEmailIsValide = validateInputEmail()

    if (!InputEmailIsValide) {
        return email.classList.add('error');
    }
}

const removeEmailErro = () => {
    const InputEmailIsValide = validateInputEmail()

    if (InputEmailIsValide) {
        email.classList.remove('error');
    }
}

const passwordErro = () => {

    const InputPasswordIsValide = validateInputPassword()

    if (!InputPasswordIsValide) {
        passwordInput.classList.add('error');
    }
}

const removePasswordErro = () => {

    const InputPasswordIsValide = validateInputPassword()

    if (InputPasswordIsValide) {
        return passwordInput.classList.remove('error')
    }
}

enter.addEventListener('click', () => passwordErro())
passwordInput.addEventListener('change', () => removePasswordErro())

enter.addEventListener('click', () => emailErro())
email.addEventListener('change', () => removeEmailErro())

const eyeclic = () => {

    let passwordTypeispassword = passwordInput.type == "password"

    if (passwordTypeispassword) {
        //ação
        showPassword()
    } else {
        //ação
        hidePassword()
    }

}

const showPassword = () => {
    passwordInput.setAttribute("type", "text", )
    eyeoutline.setAttribute("src", "svgs/eye-outline.svg")
}

const hidePassword = () => {
    passwordInput.setAttribute("type", "password")
    eyeoutline.setAttribute("src", "svgs/eye-off.svg")
}

const loginValido = () => {
    
    if(email.value == ""){
        campoVazioEmail.innerHTML = 'Preencha este campo !'
    } else {
         campoVazioEmail.innerHTML = ''
    }
    if(passwordInput.value == ""){
        campoVazioSenha.innerHTML = 'Preencha este campo !'
    } else {
        campoVazioSenha.innerHTML = ''
    }
}

const Entrar = () => {

    const emailOuSenhaIvalidos = document.querySelector('.msgerror')

    let listCad = []

    let userValid = {
        email: '#',
        senha: '#'
    }

    listCad = JSON.parse(localStorage.getItem('listCad'))

    listCad.forEach(item => {
        if(email.value == item.emailCad && passwordInput.value == item.senhaCad){

            userValid = {
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    });

    const usuarioValido = email.value == userValid.email
    const SenhaValido = passwordInput.value == userValid.senha

    loginValido()

    if(usuarioValido && SenhaValido){
        window.location.href = 'http://127.0.0.1:5501/FriendWaves/assets/profile/profile.html'

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else{
       emailOuSenhaIvalidos.setAttribute('style','display:block')
       emailOuSenhaIvalidos.innerHTML = 'E-mail ou Senha invalido'
    }

}

check.addEventListener('click', () => eyeclic())
passwordInput.addEventListener('keyup', () => keyUpDisplayEye())
enter.addEventListener('click', () => Entrar())