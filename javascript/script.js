let captchaCorrectAnswer = 0;

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    captchaCorrectAnswer = num1 + num2;

    document.getElementById('captcha-question').textContent = `${num1} + ${num2} = ?`;
  }

  function validateCaptchaInput() {
    const userInput = parseInt(document.getElementById('captcha-answer').value);
    const status = document.getElementById('captcha-status');
    const submitBtn = document.getElementById('submitBtn');

    if (!isNaN(userInput) && userInput === captchaCorrectAnswer) {
      status.textContent = "✅ Respuesta correcta.";
      status.style.color = "green";
    } else {
      status.textContent = "❌ Respuesta incorrecta. Intenta nuevamente.";
      status.style.color = "red";
    }
  }

  // Validar al escribir
  document.addEventListener('DOMContentLoaded', () => {
    generateCaptcha();
    document.getElementById('captcha-answer').addEventListener('input', validateCaptchaInput);
  });

  // Evitar que el formulario se envíe si el CAPTCHA es incorrecto
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío por defecto
    const userInput = parseInt(document.getElementById('captcha-answer').value);
    const result = document.getElementById('form-result');

    if (userInput === captchaCorrectAnswer) {
      result.style.color = 'green';
      result.textContent = '✅ Formulario enviado correctamente. ¡Gracias por tu mensaje!';
      this.reset(); // Opcional: limpia los campos del formulario
      generateCaptcha(); // Regenera un nuevo captcha
      document.getElementById('captcha-status').textContent = '';
    } else {
      result.style.color = 'red';
      result.textContent = '❌ La respuesta al CAPTCHA es incorrecta. Intenta nuevamente.';
    }
  });