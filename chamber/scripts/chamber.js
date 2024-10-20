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
      imgLogo.appendChild(portrait);
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



// Código para Current Weather 

const weatherIcon = document.getElementById("iconDiv");
const weatherText = document.getElementById("textDiv");
const forecastDiv = document.getElementById("forecast");

 //CREATE REQUIRED VARIABLES FOR THE URL
const myKey ="6ccfcd1ca0103252f02bb6825391a4b6"
const myLat="4.61"
const myLong="-74.07"


//CONSTRUCT A FULL PATH USING TEMPLATE LITERALS

const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;
const url4d = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`;
      

           
async function weather() {
  try {
      const response = await fetch(myUrl);
      if (response.ok) {
          const data = await response.json();
          console.log(data);
          displayWeather(data);
      }
      else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  };
};


const displayWeather = (data) => {
  console.log("hello"); //Prueba de que la info está leyéndose bien hasta acá
  
  weatherIcon.innerHTML = "";
  weatherText.innerHTML = "";

  const icon = document.createElement("img");
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const desc = data.weather[0].description;
  const temp = document.createElement("p");
  const weatherStatus = document.createElement("p");
  const high = document.createElement("p");
  const low = document.createElement("p");
  const humidity = document.createElement("p");
  const sunrise = document.createElement("p");
  const sunset = document.createElement("p");



  icon.setAttribute("src", iconsrc);
  icon.setAttribute("alt", desc);

  temp.innerHTML = `${data.main.temp}&deg;C`;
  weatherStatus.innerHTML = `${data.weather[0].description}`;
  high.innerHTML = `High: ${data.main.temp_max}&deg;C`;
  low.innerHTML = `Low: ${data.main.temp_min}&deg;C`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  sunrise.innerHTML = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}`;
  sunset.innerHTML = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}`;

  weatherIcon.appendChild(icon);
  weatherText.appendChild(temp);
  weatherText.appendChild(weatherStatus);
  weatherText.appendChild(high);
  weatherText.appendChild(low);
  weatherText.appendChild(humidity);
  weatherText.appendChild(sunrise);
  weatherText.appendChild(sunset);

  const today = document.createElement("p");
  today.innerHTML = `Today <strong>${data.main.temp}&deg;C</strong>`
  forecastDiv.appendChild(today);
}

weather();


async function forecast() {
  try {
      const response = await fetch(url4d);
      if (response.ok) {
          const data = await response.json();
          console.log(data);
          displayForecast(data);
      }
      else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  };
};


const displayForecast = (data) => {

  

  const tomorrow = document.createElement("p");
  const afterTomorrow = document.createElement("p");
  const threeDaysAfter = document.createElement("p");

  const tomorrowDate = new Date(data.list[5].dt * 1000);
  const afterTomorrowDate = new Date(data.list[15].dt * 1000);
  const threeDaysAfterDate = new Date(data.list[25].dt * 1000);

  tomorrow.innerHTML = `${tomorrowDate.toDateString()}: <strong>${data.list[3].main.temp}&deg;C</strong>`;
  afterTomorrow.innerHTML = `${afterTomorrowDate.toDateString()}: <strong>${data.list[11].main.temp}&deg;C</strong>`;
  threeDaysAfter.innerHTML = `${threeDaysAfterDate.toDateString()}: <strong>${data.list[19].main.temp}&deg;C</strong>`;

  forecastDiv.appendChild(tomorrow);
  forecastDiv.appendChild(afterTomorrow);
  forecastDiv.appendChild(threeDaysAfter);
}

forecast();



document.getElementById('join-us').addEventListener('click', function() {
    window.location.href = 'joinus.html';
});
