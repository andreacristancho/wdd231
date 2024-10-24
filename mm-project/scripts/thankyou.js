// Grab the entire URL for this page including the attached GET values
const currentUrl = window.location.href;
console.log(currentUrl);

// Divide the URL into two halves
const everything = currentUrl.split("?");
console.log(everything);

// Grab just the second half
let formData = everything[1].split("&");

function show(cup) {
    let result = null; // Inicializar la variable result

    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split("=")[1].replace("%40", "@");
        }
    });
    return result;
}

// Asegúrate de que la función `show` y las variables se han definido correctamente como antes.
const firstName = show("first").replace(/\+/g, " "); 
const lastName = show("last").replace(/\+/g, " "); 
const email = show("email");

// Asegúrate de que `results` es un id correcto en tu HTML o ajusta el selector.
const showInfo = document.querySelector("#results");
if (showInfo) {
    showInfo.innerHTML = `
    <p><span class="label-1">Name:</span> ${firstName} ${lastName}</p>
    <p><span class="label-1">Email:</span> ${email}</p>
    <p class="label-2">We will contact you soon!</p>

    `;
} else {
    console.error('No se encontró un elemento con el id `results`');
}