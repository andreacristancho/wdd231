async function getStockPrices() {
    const apiKey = '82MSWF4TC3857G9T';  // Reemplaza con tu API Key de Alpha Vantage
    const symbols = ['IBM', 'AAPL', 'GOOGL']; // Lista de símbolos

    document.getElementById('prices-display').innerHTML = ''; // Limpiar display

    for (const symbol of symbols) {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            
            if (data["Time Series (5min)"]) {
                const timeSeries = data['Time Series (5min)'];
                const latestTime = Object.keys(timeSeries)[0];
                const latestData = timeSeries[latestTime];
                
                const openPrice = latestData['1. open'];
                const highPrice = latestData['2. high'];
                const lowPrice = latestData['3. low'];

                // Crear un div para cada activo
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                articleDiv.innerText = symbol;

                // Agregar evento para abrir el modal
                articleDiv.addEventListener('click', function() {
                    openModal(symbol, openPrice, highPrice, lowPrice);
                });

                // Añadir el div al contenedor "prices-display"
                document.getElementById('prices-display').appendChild(articleDiv);
            } else {
                console.warn(`No data found for ${symbol}`);
            }                    
        } catch (error) {
            console.error('Error fetching data for', symbol, error);
        }
    }
}

function openModal(symbol, openPrice, highPrice, lowPrice) {
    const modal = document.getElementById('modal');
    const popUps = document.getElementById('popUps');

    // Configurar el contenido modal
    popUps.innerHTML = `
        <h2>${symbol}</h2>
        <p>Open: $${openPrice}</p>
        <p>High: $${highPrice}</p>
        <p>Low: $${lowPrice}</p>
    `;

    // Mostrar el modal
    modal.showModal();
}

// Configurar el cierre del modal
document.querySelector('.close-button').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.close();
});