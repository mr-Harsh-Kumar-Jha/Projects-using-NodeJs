const requests = require('postman-request');

const geocode = (address , callback)=>{
     const  URL =`http://api.positionstack.com/v1/forward?access_key=3be6ea495113d39d2b6b32c49d063ed1&query= ${address}&limit =1`
      requests({url:URL , json:true}, (error, response)=>{
            if(error){
                callback('Cannot connect to geocode server' , undefined);
            }
           else if(response.body.data.length === 0 ){
                callback('Address not found !! Enter proper address', undefined);
           }
           else{
               callback(undefined , {latitude:response.body.data[0].latitude , longitude:response.body.data[0].longitude} );
           }
      } )
}
module.exports = geocode;