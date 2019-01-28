`node app.js`

Using Pug Templating  engine

## Variables
after the equal sign pug accept a variable
h1=variable

## Terminalogy
```
extends layout.pug
block content
    section#content
      p  This is a great tool to make web pages

```
extends to the path of layout 
and inject it to the content section

## Middleware
Since we cannot read the req.body it will be undefined. We will use a middleware to read the request body for that we install and require the body parser.

`npm install body-parser --save `

To check we add the following console line to print the username. (Before Middleware it was printing undefined)
```javascript

app.post('/hello', (req, res) => {
    // print the username
    console.dir(req.body);
    res.render('hello');
});

```