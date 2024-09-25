document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  // Última fecha de modificación
  const lastModified = document.getElementById("lastModified");
  const lastModifiedDate = document.lastModified;
  lastModified.textContent = `Last Updated: ${lastModifiedDate}`;
});

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

const url = '../data/members.json';

// Función para obtener los datos JSON
const getMembers = async () => {
  try {
    const members = await jsonFetch(url);
    console.log(members);
    displayMembers(members);
  } catch (error) {
    console.error('Error fetching the members', error);
  }
};

// Función para hacer fetch del archivo JSON
async function jsonFetch(url) {
  try {
    const response = await fetch(url);
    console.log(response); // Para verificar el estado de la respuesta
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Asegúrate de procesar la respuesta JSON
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Función para mostrar los miembros en la página
const displayMembers = (members) => {
  const cards = document.querySelector("div.cards");
  cards.innerHTML = ""; // Limpiar el contenido previo

  members.forEach((member) => {
    let card = document.createElement("section");
    
    // Título del miembro
    let h2 = document.createElement("h2");
    h2.textContent = member.name;

    // Contenedor de estadísticas
    let stats = document.createElement("div");
    stats.classList.add("stats");

    let sectorMember = document.createElement("p");
    sectorMember.innerHTML = `<span class="label">Sector:</span> ${member.sector}`;
    
    let addressMember = document.createElement("p");
    addressMember.innerHTML = `<span class="label">Address:</span> ${member.address}`;
    
    let num = document.createElement("p");
    num.innerHTML = `<span class="label">Phone:</span> ${member.phone}`;
    
    let urlMember = document.createElement("a");
    urlMember.href = member.URL;
    urlMember.innerHTML = `Visit Member's Website`;

    let membershipLevel = document.createElement("p");
    membershipLevel.innerHTML = `<span class="label">Membership Level:</span> ${member['membership-level']}`;

    // Imagen del miembro
    let portrait = document.createElement("img");
    portrait.setAttribute("src", member.imgurl);
    portrait.setAttribute("alt", `${member.name}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Agregar estadísticas al contenedor de estadísticas
    stats.appendChild(sectorMember);
    stats.appendChild(addressMember);
    stats.appendChild(num);
    stats.appendChild(urlMember);
    stats.appendChild(membershipLevel);
    
    // Agregar título, estadísticas y la imagen a la tarjeta
    card.appendChild(h2);
    card.appendChild(stats);
    card.appendChild(portrait);
    
    // Añadir la tarjeta al contenedor de cards
    cards.appendChild(card);
  });
};

getMembers(); // Llamada para mostrar los miembros
