let express = require('express');
let cors = require('cors');
let app = express();
const currentWeatherRouter = require('./routes/currentWeather');
const dailyForecastRouter = require('./routes/dailyForecast');
const airPollutionForecastRouter = require('./routes/airPollutionHistory');
const solarRadianceRouter = require('./routes/solarIrradiance');


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(currentWeatherRouter);
app.use(dailyForecastRouter);
app.use(airPollutionForecastRouter);
app.use(solarRadianceRouter);


let port = process.env.port || 5000;

app.listen(port,()=>{
    console.log("Listening at port number - "+port);
})