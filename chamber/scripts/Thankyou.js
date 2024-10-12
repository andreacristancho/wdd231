document.addEventListener("DOMContentLoaded", function() {
    // Recupera los datos almacenados
    const firstName = sessionStorage.getItem("first-name");
    const lastName = sessionStorage.getItem("last-name");
    const organizationName = sessionStorage.getItem("organization-name");
    const timestamp = sessionStorage.getItem("timestamp");

    // Verifica si se almacenaron los valores
    if (firstName && lastName && organizationName && timestamp) {
        // Modifica el HTML para mostrar el mensaje de bienvenida
        const greetingElement = document.getElementById("Greeting");
        greetingElement.textContent = `Welcome, ${firstName} ${lastName} from ${organizationName}! We will contact you soon.`;

        // Muestra la fecha y hora del envío en un formato más legible
        const formattedTimestamp = new Date(timestamp).toLocaleString();
        const timestampElement = document.getElementById("timestampDisplay");
        if (timestampElement) {
            timestampElement.textContent = `Submitted on: ${formattedTimestamp}`;
        }
    }
});