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
  
  const url = 'data/members.json';
  
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
      card.classList.add("article");
  
      // Título del miembro
      let h2 = document.createElement("h2");
      h2.innerHTML = `<span class="business-title"> ${member.name}</span>`;
  
      let h3 = document.createElement("h3");
      h3.innerHTML = `<span class="pSector"> ${member.sector}</span>`;
  
      let grid = document.createElement("div");
      grid.classList.add("grid");
  
      let addressMember = document.createElement("p");
      addressMember.innerHTML = `<span class="label">ADDRESS:</span> ${member.address}`;
  
      let text = document.createElement("div");
      text.classList.add("text");
  
      let num = document.createElement("p");
      num.innerHTML = `<span class="label">PHONE:</span> ${member.phone}`;
  
      let urlMember = document.createElement("a");
      urlMember.href = member.URL;
      urlMember.innerHTML = `<span class="label">URL:</span>${member.URL}`;
  
      let membershipLevel = document.createElement("p");
      membershipLevel.innerHTML = `<span class="label">Membership Level:</span> ${member['membership-level']}`;
  
      let imgLogo = document.createElement("div");
      imgLogo.classList.add("imgLogo");
      // Imagen del miembro
      let portrait = document.createElement("img");
      portrait.setAttribute("src", member.imgName);
      portrait.setAttribute("alt", `${member.name}`);
      portrait.setAttribute("loading", "lazy");
      portrait.setAttribute("width", "85");
      portrait.setAttribute("height", "110");
  

      text.appendChild(addressMember);
      text.appendChild(num);
      text.appendChild(urlMember);
      imgLogo.appendChild(portrait)
      grid.appendChild(text);
      grid.appendChild(imgLogo);
  
      // Agregar título, estadísticas y la imagen a la tarjeta
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(grid);
  
      // Añadir la tarjeta al contenedor de cards
      cards.appendChild(card);
    });
  };
  
  // Este código era para ver todos los members tomados del JSON
  getMembers(); // Llamada para mostrar los miembros
  const gridbutton = document.querySelector("#grid-view");
  const listbutton = document.querySelector("#list-view");
  const display = document.querySelector("div.cards");
  // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
  gridbutton.addEventListener("click", () => {
      // example using arrow function
      display.classList.add("grid-view");
      display.classList.remove("list-view");
  });
  listbutton.addEventListener("click", showList); // example using defined function
  function showList() {
      display.classList.add("list-view");
      display.classList.remove("grid-view");
  }


  
  // Este código es para obtener miembros filtrados (silver y gold) y mostrar 3 aleatorios 
const getRandomMembers = (members) => {
  // Filtrar miembros por nivel de membresía "gold" o "silver"
  const filteredMembers = members.filter(member =>
    member['membership-level'].includes("3=gold") || member['membership-level'].includes("2=silver")
  );

  // Mezclar miembros aleatoriamente
  const shuffledMembers = filteredMembers.sort(() => Math.random() - 0.5);

  // Seleccionar los primeros 3 miembros
  return shuffledMembers.slice(0, 3);
};

// Modificar la función para obtener los datos iniciales
const getNewMembers = async () => {

  try {
    const members = await jsonFetch(url);
    const randomMembers = getRandomMembers(members);
    console.log(randomMembers);
    displayMembers(randomMembers);
  } catch (error) {
    console.error('Error fetching the members', error);
  }
};


getNewMembers(); // Mantener la llamada para mostrar los miembros