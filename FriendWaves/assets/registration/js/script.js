// seletores de nome e verificador de nome valido
const nome = document.querySelector('#fistname');
let nomeValid = false;
// seletores de sobrenome e verificador de sobrenome valido
const sobrenome = document.querySelector('#laststname');
let sobrenomeValid = false;
// seletores de email e verificador de email valido
const email = document.querySelector('#email');
let emailValid = false;
// seletores de telefone e verificador de telefone valido
const telefone = document.querySelector('#number');
let telefoneValid = false;
// seletores de senha e verificador de senha valido
const senha = document.querySelector('#password');
let senhaValid = false;
// seletores de confirmar senha  e verificador de confirmar senha valido
const confirmSenha = document.querySelector('#Confirmpassword');
let confirmSenhaValid = false;
// seletores de icones de mostrar / esconder senha
const eyePassword = document.querySelector('#eyePassword');
const eyeConfirmpassword = document.querySelector('#eyeConfirmpassword');

const cad = document.querySelector('#continue');
// essa função verifica se campo de nome é valido
nome.addEventListener('keyup', () => {
    const iconSucess = document.querySelector('#icon-sucess-1');
    const iconError = document.querySelector('#icon-error-1');

    if (nome.value.length <= 5) {
        iconError.setAttribute('style', 'display:block');
        iconSucess.setAttribute('style', 'display:none');
        nomeValid = false;
    } else {
        iconSucess.setAttribute('style', 'display:block');
        iconError.setAttribute('style', 'display:none');
        nomeValid = true;
    }
});

sobrenome.addEventListener('keyup', () => {
    const iconSucess = document.querySelector('#icon-sucess-2');
    const iconError = document.querySelector('#icon-error-2');
    if (sobrenome.value.length <= 5) {
        iconError.setAttribute('style', 'display:block');
        iconSucess.setAttribute('style', 'display:none');
        sobrenomeValid = false;
    } else {
        iconSucess.setAttribute('style', 'display:block');
        iconError.setAttribute('style', 'display:none');
        sobrenomeValid = true;
    }
});

// função resposavel por verificar se o email é valido
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

email.addEventListener('keyup', () => {
    const iconSucess = document.querySelector('#icon-sucess-3');
    const iconError = document.querySelector('#icon-error-3');

    if (!checkEmail(email.value)) {
        iconError.setAttribute('style', 'display:block');
        iconSucess.setAttribute('style', 'display:none');
        emailValid = false;
    } else {
        iconSucess.setAttribute('style', 'display:block');
        iconError.setAttribute('style', 'display:none');
        emailValid = true;
    }
});

telefone.addEventListener('keyup', () => {
    const iconSucess = document.querySelector('#icon-sucess-4');
    const iconError = document.querySelector('#icon-error-4');
    if (telefone.value.length <= 10) {
        iconError.setAttribute('style', 'display:block');
        iconSucess.setAttribute('style', 'display:none');
        telefoneValid = false;
    } else {
        iconSucess.setAttribute('style', 'display:block');
        iconError.setAttribute('style', 'display:none');
        telefoneValid = true;
    }
});

senha.addEventListener('keyup', () => {
    const iconSucess = document.querySelector('#icon-sucess-5');
    const iconError = document.querySelector('#icon-error-5');
    if (senha.value.length >= 0) {
        eyePassword.setAttribute('style', 'display:block');
    }
    if (senha.value == '') {
        eyePassword.setAttribute('style', 'display:none');
    }
    if (senha.value.length <= 7) {
        iconError.setAttribute('style', 'display:block');
        iconSucess.setAttribute('style', 'display:none');
        senhaValid = false;
    } else {
        iconSucess.setAttribute('style', 'display:block');
        iconError.setAttribute('style', 'display:none');
        senhaValid = true;
    }
});

confirmSenha.addEventListener('keyup', () => {
    const iconSucess = document.querySelector('#icon-sucess-6');
    const iconError = document.querySelector('#icon-error-6');

    if (confirmSenha.value.length >= 0) {
        eyeConfirmpassword.setAttribute('style', 'display:block');
    }
    if (confirmSenha.value == '') {
        eyeConfirmpassword.setAttribute('style', 'display:none');
    }
    if (confirmSenha.value == '') {
        iconError.setAttribute('style', 'display:block');
    } else if (confirmSenha.value != senha.value) {
        iconError.setAttribute('style', 'display:block');
        iconSucess.setAttribute('style', 'display:none');
        confirmSenhaValid = false;
    } else {
        iconSucess.setAttribute('style', 'display:block');
        iconError.setAttribute('style', 'display:none');
        confirmSenhaValid = true;
    }
});

eyePassword.addEventListener('click', () => {
    const passwordType = senha.type == 'password';
    if (passwordType) {
        senha.setAttribute('type', 'text');
        eyePassword.setAttribute('name', 'eye-outline');
    } else {
        senha.setAttribute('type', 'password');
        eyePassword.setAttribute('name', 'eye-off-outline');
    }
});

eyeConfirmpassword.addEventListener('click', () => {
    const passwordTypeConfirm = confirmSenha.type == 'password';
    if (passwordTypeConfirm) {
        confirmSenha.setAttribute('type', 'text');
        eyeConfirmpassword.setAttribute('name', 'eye-outline');
    } else {
        confirmSenha.setAttribute('type', 'password');
        eyeConfirmpassword.setAttribute('name', 'eye-off-outline');
    }
});

const cadastrar = () => {
    if (
        nomeValid &&
        sobrenomeValid &&
        emailValid &&
        telefoneValid &&
        senhaValid &&
        confirmSenhaValid
    ) {
        let listCad = JSON.parse(localStorage.getItem('listCad') || '[]');

        listCad.push({
            nomeCad: nome.value,
            sobrenomeCad: sobrenome.value,
            emailCad: email.value,
            telefoneCad: telefone.value,
            senhaCad: senha.value,
        });
        localStorage.setItem('listCad', JSON.stringify(listCad));
        window.location.href = 'http://127.0.0.1:5501/FriendWaves/index.html';
    } else {
        const msgNome = document.querySelector('#msgNome');
        const msgSobrenome = document.querySelector('#msgSobrenome');
        const msgEmail = document.querySelector('#msgEmail');
        const msgTelefone = document.querySelector('#msgTelefone');
        const msgSenha = document.querySelector('#msgSenha');
        const msgConfirmarSenha = document.querySelector('#msgConfirmarSenha');
        if (nome.value == '') {
            msgNome.setAttribute('style', 'display: block');
            msgNome.innerHTML = 'Preencha este campo !';
        } else {
            msgNome.setAttribute('style', 'display: none');
            msgNome.innerHTML = '';
        }
        if (sobrenome.value == '') {
            msgSobrenome.setAttribute('style', 'display: block');
            msgSobrenome.innerHTML = 'Preencha este campo !';
        } else {
            msgSobrenome.setAttribute('style', 'display: none');
            msgSobrenome.innerHTML = '';
        }
        if (email.value == '') {
            msgEmail.setAttribute('style', 'display: block');
            msgEmail.innerHTML = 'Preencha este campo !';
        } else {
            msgEmail.setAttribute('style', 'display: none');
            msgEmail.innerHTML = '';
        }
        if (telefone.value == '') {
            msgTelefone.setAttribute('style', 'display: block');
            msgTelefone.innerHTML = 'Preencha este campo !';
        } else {
            msgTelefone.setAttribute('style', 'display: none');
            msgTelefone.innerHTML = '';
        }
        if (senha.value == '') {
            msgSenha.setAttribute('style', 'display: block');
            msgSenha.innerHTML = 'Preencha este campo !';
        } else {
            msgSenha.setAttribute('style', 'display: none');
            msgSenha.innerHTML = '';
        }
        if (confirmSenha.value == '') {
            msgConfirmarSenha.setAttribute('style', 'display: block');
            msgConfirmarSenha.innerHTML = 'Preencha este campo !';
        } else {
            msgConfirmarSenha.setAttribute('style', 'display: none');
            msgConfirmarSenha.innerHTML = '';
        }
    }
};

cad.addEventListener('click', () => cadastrar());
