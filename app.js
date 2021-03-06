const express = require('express');
const bodyParser= require('body-parser');



//Create server
const app = express();
//Use bodyParser (Middleware)
app.use(bodyParser.urlencoded({ extended: false }));
// approch
//app.use(express.json())
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
   // res.json(req.body);
   res.render('hello', { name: req.body.username })  
});

// Call back added
app.listen(3000, function(){
    console.log("The application is running on localhost:3000");    
});