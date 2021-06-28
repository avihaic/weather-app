const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const address = process.argv[2];

if(!address){
    console.log('please provide an address');
}else{
    geocode(address, (error,{latitude,longitude,location}) => {
        if(error)
        return console.log(error);
    
        forecast({latitude,longitude,location}, (error,{location,weather_descriptions,temperature,rain}) => {
              if(error)
              return console.log(error);
              console.log('weather location = ' + location);
              console.log('weather descriptions = ' + weather_descriptions);
              console.log('temperature = ' + temperature + " degrees out. there is a " + rain + " chance of rain.");
            })
    })
}










