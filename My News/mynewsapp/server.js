const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Define your NewsAPI.org API key
const apiKey = '9c08a07ae77846988baa69ea2b4e775f';

// Define the keywords for Pakistan politics
const keywords = 'Pakistan politics';

// Define the two news sources for Pakistan politics
const sources = 'al-jazeera-english,bbc-news';

// Create a route to fetch news data
app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get(
            `https://newsapi.org/v2/everything?q=${keywords}&sources=${sources}&apiKey=${apiKey}`
        );
        const newsData = response.data.articles;
        res.json(newsData);
    } catch (error) {
        console.error('Error fetching news data:', error);
        res.status(500).json({ error: 'An error occurred while fetching news data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
