//SELECT HTML ELEMENTS IN THE DOCUMENT
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//CREATE REQUIRED VARIABLES FOR THE URL
const myKey ="6ccfcd1ca0103252f02bb6825391a4b6"
const myLat="49.76"
const myLong="6.63"


//CONSTRUCT A FULL PATH USING TEMPLATE LITERALS

const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
      // Realiza la solicitud a la API
      console.log("Fetching data...");
      const response = await fetch(myUrl);
  
      // Verifica si la respuesta es correcta (código de estado entre 200 y 299)
      if (response.ok) {
        // Convierte la respuesta a JSON
        const data = await response.json();
        console.log("Data fetched:", data);
        
        // Envía los resultados a la consola para pruebas
        displayResults(data);
      } else {
        // Lanza un error si la respuesta no es correcta
        throw Error(await response.text());
      }
    } catch (error) {
      // Muestra cualquier error en la consola
      console.error('Error al realizar la solicitud a la API:', error);
    }
  }
//DISPLAY THE JSON DATA ONTO MY WEB PAGE
  function displayResults(data) {
    console.log('hello');
    //currentTemp.innerHTML = `${data._____}&deg;F`;
    //const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
    //let desc = data.weather[0].______;
    //weatherIcon.setAttribute('___', _____);
    //weatherIcon.setAttribute('___', _____);
    //captionDesc.textContent = `${desc}`;
  }
  //START THE PROCESS
  apiFetch();