# 🌤️ React Weather Forecast App

A beautiful and responsive weather forecast app built using **React** and **Axios**. It fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api), displays current temperature, weather description, and an icon — along with a dynamically loaded background image based on the city.

---

## 🚀 Features

- 🌆 Dynamic city input
- 🌤️ Real-time weather info (temperature, description, icon)
- 🖼️ Background changes based on city
- 🎨 Stylish animated UI using CSS
- 📱 Responsive design for mobile

---

## 📸 Preview

<img src="https://source.unsplash.com/600x300/?weather" alt="preview" width="100%">

---

## 🛠️ Technologies Used

- React JS (Functional components + Hooks)
- Axios (HTTP request)
- OpenWeatherMap API
- Unsplash for dynamic background images
- CSS animations and responsive design

---

## 🔧 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/react-weather-forecast-app.git
cd react-weather-forecast-app
````

### 2. Install dependencies

```bash
npm install
```

### 3. Get your API key

* Go to [OpenWeatherMap](https://openweathermap.org/api)
* Sign up and get your free API key

### 4. Run the app

Replace the API key in `Weather.js`:

```js
const response = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
);
```

Then start the development server:

```bash
npm start
```

---

## 📂 Project Structure

```
react-weather-forecast-app/
│
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── Weather.js
│   └── App.css
├── package.json
└── README.md
```

---

## ✨ Demo Cities to Try

* Mumbai
* Delhi
* New York
* London
* Paris
* Tokyo

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Made with ❤️ by Ashish Rajput

