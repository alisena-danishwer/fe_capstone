

# 🌤️ Weather Dashboard

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=flat-square)](https://alisena-danishwer.github.io/fe_capstone/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TailwindCSS](https://img.shields.io/badge/Powered%20by-TailwindCSS-blue?style=flat-square)](https://tailwindcss.com/)

A **responsive web-based weather dashboard** built with **HTML, CSS (Tailwind)**, and **JavaScript**, allowing users to search for weather information for any city using the **OpenWeatherMap API**. The app works on **desktop and mobile devices** and includes live updates, country flags, and a clean UI.

---

## 🛠 Features

* Search for any city worldwide.
* Displays:

  * City name & country
  * Weather icon & description
  * Temperature (°C)
  * Humidity (%)
  * Wind speed (m/s)
  * Last updated timestamp
  * Country flag
* **Responsive design** for mobile, tablet, and desktop.
* **Hamburger menu** for mobile navigation.
* Automatic refresh every **5 minutes**.
* Error handling for invalid API keys or city names.

---

## 📁 Project Structure

```
weather-dashboard/
│
├─ index.html          # Main HTML file
├─ styles.css          # Custom CSS for styling
├─ script.js           # JavaScript for API calls and interactivity
└─ README.md           # Project documentation
```

---

## 🔗 Repository

GitHub Repository:
[https://github.com/alisena-danishwer/fe\_capstone.git](https://github.com/alisena-danishwer/fe_capstone.git)

---

## 🖼 Screenshot

<img width="1919" height="867" alt="image" src="https://github.com/user-attachments/assets/2fe2bf30-0463-49cc-8d01-e4e9af8c403b" />


---

## ⚡ Prerequisites

* **Web Browser** (Chrome, Firefox, Edge)
* **Internet connection** (to fetch data from OpenWeatherMap API)
* **VS Code** (optional, for local development)
* **Live Server extension** (recommended for running locally)

---

## 🔧 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/alisena-danishwer/fe_capstone.git
cd fe_capstone
```

2. **Open in VS Code**
   Right-click `index.html` → **Open with Live Server**

3. **Obtain OpenWeatherMap API key**

   * Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   * Replace the placeholder in `script.js`:

```javascript
const API_KEY = 'YOUR_API_KEY';
```

4. **Open the app in a browser**

   * Use Live Server or directly open `index.html`.

---

## 📱 Mobile Testing

* Open the app in a browser, then use **Chrome DevTools → Toggle Device Toolbar** to simulate mobile devices.
* For native testing:

  * Android → Use **Android Studio Emulator**
  * iOS → Use **Xcode Simulator** (Mac only)

---

## 💻 Usage

1. Enter the city name in the search box.
2. Click **Search** or press **Enter**.
3. Weather data will appear below, including the country flag and description.
4. Click **Refresh** to update the current city's weather manually.
5. Hamburger menu on mobile allows access to **Home** and **API Source** links.

---

## ⚙️ Customization

* **Change default city**: Update `currentCity` in `script.js`.

```javascript
let currentCity = 'London';
```

* **Update refresh interval**: Modify `UPDATE_INTERVAL` in `script.js`.

```javascript
const UPDATE_INTERVAL = 5 * 60 * 1000; // 5 minutes
```

* **Change theme colors**: Adjust Tailwind classes in `index.html` or override in `styles.css`.

---

## 🔗 Credits

* Weather data from [OpenWeatherMap API](https://openweathermap.org/)
* Flags from [Flagcdn](https://flagcdn.com/)
* Built by **Ali Sena Danishwer**

---

## 📜 License

This project is **MIT Licensed** — feel free to use, modify, or distribute.

---

Regards
Ali Sena Danishwer
