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





