const boton_register = document.getElementById('boton-register');
const input_nombres = document.getElementById('nombres');
const input_apellidos = document.getElementById('apellidos');
const input_correo = document.getElementById('correo');
const input_contraseña = document.getElementById('contraseña');
const input_contraseña2 = document.getElementById('contraseña2');

const form = document.getElementById('form-register');
form.addEventListener('submit', (e) => {
    e.preventDefault();
})

function datosValidos() {
    if (input_nombres.value == "" ||
        input_apellidos.value == "" ||
        input_correo.value == "" ||
        input_contraseña.value == "" ||
        input_contraseña2.value == "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    if (input_contraseña.value !== input_contraseña2.value) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    var emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(input_correo.value)) {
        alert("Por favor, ingrese un correo electrónico válido");
        return false;
    }

    return true;
}

boton_register.addEventListener('click', () => {
    if (datosValidos()) {
        alert('Cuenta creada');
    }
})
