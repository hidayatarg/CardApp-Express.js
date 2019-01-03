const express = require('express');


//Create server
const app = express();

//Route
app.get('/', (req, res) =>{
    res.send('Hello express');
});

app.get('/about', (req, res) => {
    res.send('Welcome to about page');
});
app.listen(3000);