const requires = require('postman-request');

const forecast = (latitude, longitude, callback) =>{
   url=`http://api.weatherstack.com/forecast?access_key=9c51e02e12240afece8088eaf467b6c6&query=${latitude},${longitude}&units=f`
   requires({url:url , json:true}, (error, {body})=>{
             if(error){
                    callback('Cannot connect to Network : Kindely try again later' , undefined);
             }
             else if(body.error){
                    callback('Location not found ' , undefined )
             }
             else{
                   callback(undefined , `${body.current.weather_descriptions} It is currently ${body.current.temperature} ${body.request.unit} and their is ${body.current.humidity}% chance of rain but it feels like ${body.current.feelslike} ${body.request.unit}` )
             }
   })
}

module.exports = forecast;