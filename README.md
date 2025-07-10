# 🌆 Smart City Real-Time Dashboard

A dynamic and interactive Smart City Dashboard that displays real-time **weather**, **local news**, and **top 10 cryptocurrency prices** in Nigerian Naira (₦). Built with modern web technologies and powered by public APIs.

---

## 🚀 Live Preview

> Coming soon — https://citydashboard.onrender.com

---

## 🧩 Tech Stack

### 🌐 Frontend
- HTML5 + TailwindCSS
- JavaScript (ES6)
- Chart.js (for crypto charts)
- LocalStorage (to store selected city)

### ⚙️ Backend
- Node.js + Express
- Environment variables via `dotenv`
- RESTful API routing

### 🔌 APIs Used
- [WeatherAPI](https://www.weatherapi.com/) — real-time weather
- [NewsAPI](https://newsapi.org/) — latest city-specific news
- [CoinGecko](https://www.coingecko.com/) — top 10 crypto prices

---

## 📁 Folder Structure

smartcity-dashboard/
├── backend/ # Express server
│ ├── routes/ # Weather, news, crypto API routes
│ ├── server.js # App entry point
│ └── .env # API keys (not pushed to GitHub)
│
├── frontend/ # Frontend UI
│ ├── dashboard.html
│ └── script.js
│
└── README.md

yaml
Copy
Edit

---

## 📦 Installation

### 1. Clone the Repository


git clone https://github.com/yourusername/smartcity-dashboard.git
cd smartcity-dashboard
2. Install Backend Dependencies

cd backend
npm install
3. Add Environment Variables
Create a .env file inside backend/:


WEATHER_API_KEY=your_weatherapi_key
NEWS_API_KEY=your_newsapi_key
🖥️ Run the App Locally
Start the backend server:

cd backend
node server.js
Open the frontend:
Open frontend/dashboard.html in your browser or serve via Vercel.

🔒 Environment Variables
The backend requires the following keys (from WeatherAPI and NewsAPI):


WEATHER_API_KEY=your_weatherapi_key
NEWS_API_KEY=your_newsapi_key
Note: Do not expose your .env file publicly.

📊 Features
🌦️ Live weather by city

📰 Real-time local news

🪙 Top 10 crypto prices in NGN with interactive chart

⚡ Responsive and mobile-friendly

📁 Clean modular codebase

🚀 Deployment Suggestions
Frontend: Deploy frontend/ folder to Vercel

Backend: Deploy backend/ to Render or Railway

🧠 Future Improvements
Add login & user preferences

Expand data sources (e.g., traffic, pollution)

Dark mode support

Progressive Web App (PWA) setup

👨‍💻 Author
Adedotun Idowu
Smart Web Developer based in Nigeria


