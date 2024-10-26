const images = [
    { "id": 1, "title": "Trading", "url": "images/trading-1.webp" },
    { "id": 2, "title": "Trading", "url": "images/trading-2.webp" },
    { "id": 3, "title": "Trading", "url": "images/trading-3.webp" },
    { "id": 4, "title": "Trading", "url": "images/trading-4.webp" },
    { "id": 5, "title": "Trading", "url": "images/trading-5.webp" },
    { "id": 6, "title": "Investors", "url": "images/investor-1.webp" },
    { "id": 7, "title": "Investors", "url": "images/investor-2.webp" },
    { "id": 8, "title": "Investors", "url": "images/investor-3.webp" },
    { "id": 9, "title": "Investors", "url": "images/investor-4.webp" },
    { "id": 10, "title": "Investors", "url": "images/investor-5.webp" },
    { "id": 11, "title": "Investors", "url": "images/bitcoin-1.webp" },
    { "id": 12, "title": "Crypto", "url": "images/bitcoin-2.webp" },
    { "id": 14, "title": "Crypto", "url": "images/bitcoin-3.webp" },
    { "id": 15, "title": "Crypto", "url": "images/bitcoin-4.webp" },
    { "id": 15, "title": "Crypto", "url": "images/bitcoin-5.webp" }
];

function filterImages() {
    const filter = document.getElementById("imageFilter").value;
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = '';  // Limpiar las imágenes anteriores

    const filteredImages = filter === 'All' ? images : images.filter(image => image.title === filter);

    filteredImages.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.url;
        imgElement.alt = image.title;
        imgElement.loading = "lazy";  // Activar carga diferida
        imgElement.style.width = '200px';
        imgElement.style.margin = '10px';
        imageContainer.appendChild(imgElement);
    });
}

// Cargar todas las imágenes al inicio
filterImages();