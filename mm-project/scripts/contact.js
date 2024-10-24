document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("joinForm");

    form.addEventListener("submit-button", function(event) {
        event.preventDefault(); // Previene el envío normal del formulario

        // Captura los datos del formulario
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        
        // Almacena los datos en sessionStorage
        sessionStorage.setItem("first-name", firstName);
        sessionStorage.setItem("last-name", lastName);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("timestamp", new Date().toISOString());

        // Redirigir a la página de agradecimiento
        window.location.href = "thankyou.html";
    });
});

