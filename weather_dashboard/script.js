const API_KEY = 'b0af5c4ff48c65072edd794f02334f01'; // Your new API key
const UPDATE_INTERVAL = 5 * 60 * 1000; // 5 minutes in milliseconds

const searchBtn = document.getElementById('searchBtn');
const refreshBtn = document.getElementById('refreshBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');
const errorMessage = document.getElementById('errorMessage');
const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const description = document.getElementById('description');
const lastUpdated = document.getElementById('lastUpdated');

// Verify DOM elements exist
console.log('cityName element:', cityName); // Debug: Check if element is found

let currentCity = 'London'; // Default city
let autoUpdateInterval = null;

async function getWeather(city) {
    try {
        if (!cityName) {
            throw new Error('City name element not found in DOM');
        }
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
        console.log('API Request URL:', `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`); // Debug URL
        console.log('Response status:', response.status); // Debug status
        if (!response.ok) {
            throw new Error(response.status === 401 ? 'Invalid API key' : response.status === 404 ? 'City not found' : 'Network error. Please check your internet connection or API key.');
        }
        const data = await response.json();
        console.log('Full API Response:', data); // Log full response for debugging
        
        // Explicitly set city name and log it
        const cityDisplay = `${data.name}, ${data.sys.country}`;
        console.log('Setting city name to:', cityDisplay);
        cityName.textContent = cityDisplay;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        temperature.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
        description.textContent = data.weather[0].description;
        lastUpdated.textContent = `Last updated: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore' })}`; // Adjusted for +08 timezone
        
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        
        currentCity = city;
        resetAutoUpdate();
    } catch (error) {
        console.error('Error fetching weather:', error); // Debug error
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('hidden');
        weatherInfo.classList.add('hidden');
    }
}

function resetAutoUpdate() {
    if (autoUpdateInterval) {
        clearInterval(autoUpdateInterval);
    }
    autoUpdateInterval = setInterval(() => getWeather(currentCity), UPDATE_INTERVAL);
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
        cityInput.value = '';
    } else {
        errorMessage.textContent = 'Please enter a city name';
        errorMessage.classList.remove('hidden');
        weatherInfo.classList.add('hidden');
    }
});

refreshBtn.addEventListener('click', () => {
    getWeather(currentCity);
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

getWeather(currentCity);