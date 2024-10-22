

const url = "https://api.marketstack.com/v1/eod?access_key=cb55a5cb5cc2f3a588f5319dd08c971b&symbols=AAPL";
const options = {
    method: "GET",
};

async function fetchData() {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            // Handle errors of non-2xx status codes
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json(); // Assuming the API returns JSON

        // Display a success message and log the data
        document.getElementById('prices').textContent = 'Data successfully fetched!';
        console.log(result);
    } catch (error) {
        // Display the error message
        document.getElementById('prices').textContent = `Failed to fetch data: ${error.message}`;
        console.error('Error:', error);
    }
}

// Call the function when the window loads
fetchData();