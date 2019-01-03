const express = require('express');


//Create server
const app = express();

//Route
app.get('/', (req, res) =>{
    res.send('<h1>Hello express</h1>');
});

app.get('/about', (req, res) => {
    res.send('Welcome to about page');
});

// Call back added
app.listen(3000, function(){
    console.log("The application is running on localhost:3000");    
});