const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/air-pollution-forecast', async (req, res) => {
    try {
        const apiKey = process.env.OPEN_API;
        const { lat, lon } = req.query;

        if (!lat || !lon) {
            return res.status(400).json({ success: false, error: 'Please Provide Latittude and Longitude information' });
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const response = await axios.get(apiUrl);
        const responseData = response.data;

        res.json({ success: true, data: responseData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

module.exports = router;
