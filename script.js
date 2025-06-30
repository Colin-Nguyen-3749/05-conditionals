// Get the form and suggestion section from the HTML
const weatherForm = document.getElementById('weatherForm');
const suggestionSection = document.getElementById('suggestion');

// Listen for the form submission
weatherForm.addEventListener('submit', function(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Get the selected weather value
  const weatherSelect = document.getElementById('weather');
  const weather = weatherSelect.value;

  // Create a variable for the suggestion message
  let message = '';

  // Check the weather and set the message
  if (weather === 'sunny') {
    // If it's sunny
    message = `It's sunny! 😎 Don't forget your sunglasses.`;
  } else if (weather === 'cloudy') {
    // If it's cloudy
    message = `It's cloudy! ☁️ You might want a light sweater.`;
  } else if (weather === 'rainy') {
    // If it's rainy
    message = `It's rainy! 🌧️ Bring an umbrella.`;
  } else if (weather === 'snowy') {
    // If it's snowy
    message = `It's snowy! ❄️ Wear warm boots and a coat.`;
  } else if (weather === 'windy') {
    // If it's windy
    message = `It's windy! 💨 Hold onto your hat.`;
  } else {
    // If no weather is selected
    message = `Please select the weather.`;
  }

  // Show the suggestion message in the suggestion section
  suggestionSection.innerHTML = `<p>${message}</p>`;
});
