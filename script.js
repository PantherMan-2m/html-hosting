// Make an HTTP GET request to Node-RED endpoint
fetch('http://<node-red-server-address>/data')
    .then(response => response.text())
    .then(data => {
        // Display received data on the webpage
        document.getElementById('output').textContent = data;
    })
    .catch(error => console.error('Error:', error));

// Define a function to fetch data from Node-RED
function fetchData() {
    // Make an HTTP GET request to Node-RED endpoint
    fetch('http://127.0.0.1:1880/data')
        .then(response => response.text())
        .then(data => {
            // Display received data on the webpage
            document.getElementById('output').textContent = data;
        })
        .catch(error => console.error('Error:', error));
}

// Add an event listener to the button to trigger the fetch request
document.getElementById('fetchButton').addEventListener('click', fetchData);