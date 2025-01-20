const boton_login = document.getElementById('boton-login');
const input_correo = document.getElementById('correo');
const input_contraseña = document.getElementById('contraseña');

const form = document.getElementById('form-login');
form.addEventListener('submit', (e) => {
    e.preventDefault();
})

function datosValidos() {
    if (input_correo.value == "" ||
        input_contraseña.value == "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    var emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(input_correo.value)) {
        alert("Por favor, ingrese un correo electrónico válido");
        return false;
    }

    return true;
}

boton_login.addEventListener('click', () => {
    if (datosValidos()) {
        alert('Bienvenido');
    }
})
