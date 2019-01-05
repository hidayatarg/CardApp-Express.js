const express = require('express');


//Create server
const app = express();

app.set('view engine','pug');

//Route
app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/card', (req, res)=>{
    res.render('card',{prompt:"Ahmad Jan", Hint:"hint comes here"});
});

app.get('/about', (req, res) => {
    res.send('Welcome to about page');
});

app.get('/hello',(req, res)=>{
    res.render('hello');
});

app.post('/hello', (req, res) => {
    // after post rerender it
    res.render('hello');
});

// Call back added
app.listen(3000, function(){
    console.log("The application is running on localhost:3000");    
});