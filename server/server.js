// Require express - gives us back a function
const express = require('express');
const app = express();
const port = 5001; 

app.use(express.static('server/public'));

const Random = require('./public//client/random-number');
let randomInstance = new Random(10, 10000);

const Convert = require('./public/client/dollar-converter');
let anotherRandomInstance = new Convert(randomInstance);

let amount = require ('./public/client/currency');
// const currencyAmount = require('./public/client/currency')

// const Random = require('./public//client/random-number');
// const Convert = require('./public/client/dollar-converter');


// Create an instance of express by calling the function
// gives us back an object
// Used to direct traffic

app.get('/currency', function(req, res){
    
  res.send(`test ${randomInstance.generateRandom()}`)

});

// Start up the server
app.listen(port, function() {
    console.log('listening on port', port);
    console.log(`1 ${Random.generateRandom()}`);
    console.log(`2 ${Convert.generateConversionNumber()}`);
    console.log(`1 ${amount(convertToUSDCurrency.generateConversionNumber())}`);
    
    
});
