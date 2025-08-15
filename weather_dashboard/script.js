const API_KEY = 'b0af5c4ff48c65072edd794f02334f01'; // Use your valid OpenWeatherMap API key
const UPDATE_INTERVAL = 5 * 60 * 1000; // 5 minutes

document.addEventListener('DOMContentLoaded', () => {
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

    let currentCity = 'London'; // Default city
    let autoUpdateInterval = null;

    async function getWeather(city) {
        try {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
            console.log('Fetching:', apiUrl);
            
            const response = await fetch(apiUrl);
            console.log('Response status:', response.status);

            if (!response.ok) {
                throw new Error(
                    response.status === 401
                        ? 'Invalid API key'
                        : response.status === 404
                        ? 'City not found'
                        : 'Unable to fetch weather data'
                );
            }

            const data = await response.json();
            console.log('Weather data:', data);

            if (!data.weather || !data.weather.length) {
                throw new Error('No weather information found');
            }

            // Update UI
            const cityDisplay = `${data.name}, ${data.sys.country}`;
            cityName.textContent = cityDisplay;
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherIcon.alt = data.weather[0].description;
            temperature.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
            windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
            description.textContent = data.weather[0].description;
            lastUpdated.textContent = `Last updated: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore' })}`;

            weatherInfo.classList.remove('hidden');
            errorMessage.classList.add('hidden');
            currentCity = city;
            resetAutoUpdate();
        } catch (error) {
            console.error('Error fetching weather:', error);
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

    // Initial fetch
    getWeather(currentCity);
});