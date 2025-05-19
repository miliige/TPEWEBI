document.addEventListener('DOMContentLoaded', function() {
    const captchaDiv = document.getElementById('captcha');
    const captchaInput = document.getElementById('captcha-input');
    const captchaError = document.querySelector('#captcha-contenedor .error-message');
    const generarCaptchaBtn = document.getElementById('generar-captcha');
    const captchaResultadoDiv = document.getElementById('captcha-resultado');
    const enviarBtn = document.getElementById('enviar-btn');
    const formContacto = document.getElementById('form-contacto');

    let codigoCaptcha;

    function generarCaptcha() {
        codigoCaptcha = Math.floor(Math.random() * 9000) + 1000; // Genera un número de 4 dígitos al azar
        captchaDiv.textContent = codigoCaptcha;
        captchaResultadoDiv.textContent = '';
        captchaResultadoDiv.className = '';
        enviarBtn.disabled = true; // Deshabilitar el botón al generar un nuevo captcha
        captchaInput.value = '';
        captchaError.style.display = 'none';
    }

    function validarCaptcha() {
        if (captchaInput.value === codigoCaptcha.toString()) {
            captchaResultadoDiv.textContent = '¡CAPTCHA CORRECTO!';
            captchaResultadoDiv.className = 'correcto';
            enviarBtn.disabled = false; // Habilitar el botón si el captcha es correcto
            captchaError.style.display = 'none';
            return true;
        } else {
            captchaResultadoDiv.textContent = 'Captcha incorrecto.';
            captchaResultadoDiv.className = 'incorrecto';
            captchaError.style.display = 'block';
            enviarBtn.disabled = true; // Asegurarse de que el botón esté deshabilitado si es incorrecto
            return false;
        }
    }

    generarCaptcha(); // Generar el primer captcha al cargar la página

    generarCaptchaBtn.addEventListener('click', generarCaptcha);

    formContacto.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío por defecto

        if (!enviarBtn.disabled) {
          
            location.reload();
        } 
    });

    // Opcional: Puedes agregar un evento para validar el captcha mientras se escribe
    captchaInput.addEventListener('input', validarCaptcha);
});