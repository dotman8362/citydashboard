
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5050;


app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend'))); // adjust path as needed

// const router = express.Router();
const API_KEY = process.env.WEATHER_API_KEY;

app.get('/api/weather', async (req, res) => {
  const city = req.query.city;
//   console.log("City received:", city);

  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
      params: {
        key: API_KEY,
        q: city
      }
    });

    const data = response.data;

    res.json({
      city: data.location.name,
      country: data.location.country,
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      local_time: data.location.localtime
    });
  } catch (err) {
    if (err.response?.data?.error) {
      return res.status(404).json({ error: err.response.data.error.message });
    }
    res.status(500).json({ error: 'Server error fetching weather data' });
  }
});

app.get('/api/crypto', async (req, res) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
      params: {
        vs_currency: 'ngn',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: false
      }
    });

    const coins = response.data.map(coin => ({
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      current_price: coin.current_price,
      image: coin.image,
      market_cap_rank: coin.market_cap_rank
    }));

    res.json(coins);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Unable to fetch crypto data' });
  }
});


app.get('/api/news', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const response = await axios.get('https://gnews.io/api/v4/search', {
      params: {
        q: city,
        lang: 'en',
        country: 'ng',
        max: 5,
        token: process.env.GNEWS_API_KEY
      }
    });

    const articles = response.data.articles.map(article => ({
      title: article.title,
      url: article.url,
      source: article.source.name,
      publishedAt: article.publishedAt
    }));

    res.json({ city, articles });
  } catch (err) {
    console.error('GNews API error:', err.response?.data || err.message);
    res.status(err.response?.status || 500).json({
      error: err.response?.data?.message || 'Unable to fetch news'
    });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

