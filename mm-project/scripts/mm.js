const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
  
    // Última fecha de modificación
    const lastModified = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModified.textContent = `Last Updated: ${lastModifiedDate}`;
  });

  const url = 'data/news.json';
  
  // Función para obtener los datos JSON
  const getNews = async () => {
    try {
      const news = await jsonFetch(url);
      
      console.log(news);
      displayNews(news);
    } catch (error) {
      console.error('Error fetching the news', error);
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
      const data = await response.json(); // Procesa la respuesta JSON
      console.log('Datos JSON recibidos:', data); // OJO PARA VER SI DESCARGA LA INFO
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
   }

  // Función para mostrar los miembros en la página
  const displayNews = (news) => {

    console.log("working..")
    
    const cards = document.querySelector("div.cards");
    cards.innerHTML = ""; // Limpiar el contenido previo
  

    news.forEach((newsItem) => {
        let card = document.createElement("section");
        card.classList.add("article");
    
        // Título del miembro
        let h2 = document.createElement("h2");
        h2.innerHTML = `<span class="titleNews"> ${newsItem.title}</span>`;
    
        let h3 = document.createElement("h3");
        h3.innerHTML = `<span class="dateNews"> ${newsItem.date}</span>`;
    
        let p = document.createElement("p");
        p.innerHTML = `${newsItem.news}`;
    
        let imgNews = document.createElement("div");
        imgNews.classList.add("imgNews");

           // Imagen del miembro
        let portrait = document.createElement("img");
        portrait.setAttribute("src", newsItem.image);
        portrait.setAttribute("alt", newsItem.date);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "85");
        portrait.setAttribute("height", "110");

  
      // Agregar título, estadísticas y la imagen a la tarjeta
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p);
        imgNews.appendChild(portrait);
        card.appendChild(imgNews);
      
        // Añadir la tarjeta al contenedor de cards
        cards.appendChild(card);
    });
  };

getNews();



//API DE STOCK MARKETS: https://www.alphavantage.co/

 // Reemplaza "demo" con tu propia clave API
 //const urlPrice = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=4DMUZJ89IQR7DQL3";
 //const options = {
 //    method: "GET",
 //};
 //
 //async function fetchData() {
 //    try {
 //        const response = await fetch(urlPrice, options);
 //
 //        if (!response.ok) {
 //            throw new Error(`Error: ${response.status} ${response.statusText}`);
 //        }
 //
 //        const result = await response.json(); // Assuming the API returns JSON
 //        console.log(result);
 //
 //        displayStockData(result);
 //    } catch (error) {
 //        document.getElementById('prices').textContent = `Failed to fetch data: ${error.message}`;
 //        console.error('Error:', error);
 //    }
 //}
 //
 //function displayStockData(data) {
 //    console.log("Displaying data...");
 //    // Assuming 'data' has a structure that contains an array or suitable data object.
 //    const pricesElement = document.getElementById('prices');
 //    pricesElement.innerHTML = ""; // Clear any existing content
 //
 //    // Create elements to display relevant stock information
 //    const symbol = document.createElement('p');
 //    const closePrice = document.createElement('p');
 //    const openPrice = document.createElement('p');
 //    const date = document.createElement('p');
 //
 //    // Use properties from the API data to set text
 //    symbol.innerHTML = `Symbol: ${data.data[0].symbol}`;
 //    closePrice.innerHTML = `Close Price: ${data.data[0].close}`;
 //    openPrice.innerHTML = `Open Price: ${data.data[0].open}`;
 //    date.innerHTML = `Date: ${data.data[0].date}`;
 //
 //    // Append the elements to the 'prices' container
 //    pricesElement.appendChild(symbol);
 //    pricesElement.appendChild(closePrice);
 //    pricesElement.appendChild(openPrice);
 //    pricesElement.appendChild(date);
 //}
 //
 //fetchData();
 //