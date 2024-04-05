// Make an HTTP GET request to Node-RED endpoint
fetch('http://<node-red-server-address>/data')
    .then(response => response.text())
    .then(data => {
        // Display received data on the webpage
        document.getElementById('output').textContent = data;
    })
    .catch(error => console.error('Error:', error));