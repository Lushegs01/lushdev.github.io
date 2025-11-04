const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
const USER_ID = '1234567890'; // Your Twitter user ID (get from Twitter API)

// Endpoint to fetch your tweets
app.get('/api/tweets', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.twitter.com/2/users/${USER_ID}/tweets?max_results=6&tweet.fields=created_at,public_metrics&expansions=author_id`,
      {
        headers: {
          'Authorization': `Bearer ${BEARER_TOKEN}`
        }
      }
    );

    res.json(response.data.data);
  } catch (error) {
    console.error('Twitter API error:', error);
    res.status(500).json({ error: 'Failed to fetch tweets' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});