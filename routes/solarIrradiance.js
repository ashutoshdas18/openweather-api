const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/solar-radiance', async (req, res) => {
    try {
        const apiKey = process.env.OPEN_API;
        const { lat, lon, date } = req.query;

        if (!lat || !lon || !date) {
            return res.status(400).json({ success: false, error: 'Please provide Lattitude, Longitude and Date' });
        }

        const apiUrl = `https://api.openweathermap.org/energy/1.0/solar/data?lat=${lat}&lon=${lon}&date=${date}&appid=${apiKey}`;

        const response = await axios.get(apiUrl);
        const responseData = response.data;

        res.json({ success: true, data: responseData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

module.exports = router;
