const mongodb = require('mongodb'); 
const MongoClient = mongodb.MongoClient; 
const connectionURL = 'mongodb://127.0.0.1:27017'; 
const databaseName = 'dbglobaltemperature'; 
MongoClient.connect(connectionURL, 
 { useNewUrlParser: true, useUnifiedTopology: true }, 
 (error, client) => { 
 if (error) { 
 console.log('Cannot connect to the database'); 
 return; 
 } 
 const database = client.db(databaseName); 
 if (database) {
 console.log("Database connected successfully"); 
 database.collection("TemperatureChangesByCountry").find({$and: [{'Country':'Canada'}]}) 
 .toArray ((error, TemperatureChangesByCountry) => { 
  
   const d = new Date("1788-06-01"); 
 d.getMonth(); 
 
   TemperatureChangesByCountry.forEach((TemperatureChangesByCountry) => { 
 console.log("------"); 
 console.log ("The Temperature recording in",TemperatureChangesByCountry.Country,"for the month of June is",TemperatureChangesByCountry.AverageTemperature); 
 console.log ("The Average Temperature Uncertainty is", TemperatureChangesByCountry.AverageTemperatureUncertainty ); 
 
 }) 
 
 })
 }
})