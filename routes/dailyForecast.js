const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/daily-forecast', async (req, res) => {
    try {
        const apiKey = process.env.OPEN_API;
        const { lat, lon} = req.query;

        if (!lat || !lon) {
            return res.status(400).json({ success: false, error: 'Latitude, longitude, are required.' });
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const response = await axios.get(apiUrl);
        const responseData = response.data;

        res.json({ success: true, data: responseData });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

module.exports = router;