const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const city = process.argv[2];
const country = process.argv[4];
const District = process.argv[3];

const address = `${city} , ${District} ,${country}`;
geocode(address , (error , {latitude, longitude}={})=>{
       if(error){
           console.log(error);
       }
       else{
         forecast(latitude, longitude , (error , forecastdata)=>{
            if(error){
               console.log(error);
           }
           else{
               console.log(forecastdata);
           }
         })
       }
})