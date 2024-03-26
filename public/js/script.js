// Get reference to the button element with the ID 'load-data'
const button = document.getElementById('load-data');

// Get reference to the div element with the ID 'json-data'
const jsonData = document.getElementById('json-data');

// Add event listener to the button for click events
button.addEventListener('click', async () => {
  // Fetch JSON data from the '/api/data' endpoint
  const response = await fetch('/api/data');
  // Parse the response body as JSON
  const data = await response.json();

  // Display the JSON data in the div container
  // Use <pre> tag to maintain JSON formatting
  jsonData.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
});
