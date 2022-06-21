const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const city = process.argv[2];
const country = process.argv[4];
const District = process.argv[3];

const address = `${city} , ${District} ,${country}`;
geocode(address , (error , data)=>{
       if(error){
           console.log(error);
       }
       else{
         console.log(data);
         forecast(data.latitude, data.longitude , (error , forecastdata)=>{
            if(error){
               console.log(error);
           }
           else{
               console.log(forecastdata);
           }
         })
       }
})