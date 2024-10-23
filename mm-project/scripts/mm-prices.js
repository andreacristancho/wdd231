const urlPrice = "https://api.marketstack.com/v1/eod?access_key=e7946eb14d6fec94436e5d25e076a5ff&symbols=AAPL,MSFT,GOOGL,AMZN,FB,TSLA,NFLX,BA,DIS,JPM";
const options = {
    method: "GET",
};

async function fetchData() {
    try {
        const response = await fetch(urlPrice, options);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json(); // Assuming the API returns JSON
        console.log(result);

        displayStockData(result);
    } catch (error) {
        document.getElementById('prices').textContent = `Failed to fetch data: ${error.message}`;
        console.error('Error:', error);
    }
}

function displayStockData(data) {
    console.log("Displaying data...");
    // Assuming 'data' has a structure that contains an array or suitable data object.
    const pricesElement = document.getElementById('prices');
    pricesElement.innerHTML = ""; // Clear any existing content

    // Create elements to display relevant stock information
    const symbol = document.createElement('p');
    const closePrice = document.createElement('p');
    const openPrice = document.createElement('p');
    const date = document.createElement('p');

    // Use properties from the API data to set text
    symbol.innerHTML = `Symbol: ${data.data[0].symbol}`;
    closePrice.innerHTML = `Close Price: ${data.data[0].close}`;
    openPrice.innerHTML = `Open Price: ${data.data[0].open}`;
    date.innerHTML = `Date: ${data.data[0].date}`;

    // Append the elements to the 'prices' container
    pricesElement.appendChild(symbol);
    pricesElement.appendChild(closePrice);
    pricesElement.appendChild(openPrice);
    pricesElement.appendChild(date);
}

fetchData();
