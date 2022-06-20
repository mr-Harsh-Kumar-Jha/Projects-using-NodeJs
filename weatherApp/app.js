const requests = require("postman-request");
//   const apikey = process.env.API_KEY;
const URL = `http://api.weatherstack.com/forecast?access_key=9c51e02e12240afece8088eaf467b6c6&query=Rajasthan,India&units=f`
const GeoUrl = `http://api.positionstack.com/v1/forward?access_key=3be6ea495113d39d2b6b32c49d063ed1&query= MohanNagar,Pimpri,Pune, 411018 Maharashtra, India&limit =1`

requests({ url: URL, json: true }, (error, response) => {
   //   const data = JSON.parse(response.body);  // as we have done json to be true therefore response.body will exist as object therefore there is no necessary for us to parse it.
   //   console.log(data.current);
   if (response.body.current.weather_descriptions == 'Sunny') {
      console.log(`The temp is ${response.body.current.temperature} ${response.body.request.unit} and their is no chance of rain and it feels like ${response.body.current.feelslike} degree`);
   }
   else {
      console.log(`${response.body.current.weather_descriptions} The temp is ${response.body.current.temperature} ${response.body.request.unit} and their is ${response.body.current.precip}% chance of rain but it feels like ${response.body.current.feelslike} ${response.body.request.unit}`);
   }
})
requests({ url: GeoUrl , json:true}, (error, response) => {
   //   const data = JSON.parse(response.body);  // as we have done json to be true therefore response.body will exist as object therefore there is no necessary for us to parse it.
   //   console.log(data.current);
   console.log(response.body.data[0].latitude, response.body.data[0].longitude);

   // console.log(response.body.current);
})