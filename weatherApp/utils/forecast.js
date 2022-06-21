const requires = require('postman-request');

const forecast = (latitude, longitude, callback) =>{
   url=`http://api.weatherstack.com/forecast?access_key=9c51e02e12240afece8088eaf467b6c6&query=${latitude},${longitude}&units=f`
   requires({url:url , json:true}, (error, response)=>{
             if(error){
                    callback('Cannot connect to Network : Kindely try again later' , undefined);
             }
             else if(response.body.error){
                    callback('Location not found ' , undefined )
             }
             else{
                   callback(undefined , `${response.body.current.weather_descriptions} It is currently ${response.body.current.temperature} ${response.body.request.unit} and their is ${response.body.current.humidity}% chance of rain but it feels like ${response.body.current.feelslike} ${response.body.request.unit}` )
             }
   })
}

module.exports = forecast;