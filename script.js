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

  // Get the temperature value from the input
  const temperatureInput = document.getElementById('temperature');
  const temperature = Number(temperatureInput.value);

  // Create a variable for the suggestion message
  let message = '';

  // Check if weather is cloudy or rainy
  if (weather === 'cloudy' || weather === 'rainy') {
    // Suggest a light jacket for cloudy or rainy weather
    message = `It's ${weather}! A light jacket might be a good idea.`;
  } else if (weather === 'sunny') {
    // If it's sunny
    message = `It's sunny! 😎 Don't forget your sunglasses.`;
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

  // Check if temperature is below 50°F and add suggestion
  if (temperature < 50 && weather !== '') {
    // Add a suggestion for a warm jacket
    message = `${message} It's cold! 🧥 Wear a warm jacket.`;
  }

  // Show the suggestion message in the suggestion section
  suggestionSection.innerHTML = `<p>${message}</p>`;
});
