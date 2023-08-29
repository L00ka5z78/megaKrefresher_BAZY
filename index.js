const express = require("express");
const methodOverride = require("method-override")
const hbs = require('express-handlebars');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
// app.use(express.json())

app.engine('.hbs', hbs({
    extname: '.hbs',
    // helpers: handlebarsHelpers,  
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.send('<h1>HELLO WORLD</h1>')
})

app.use(handleError);

app.listen(3000, "localhost", () => {
    console.log('Server is ON and running on: http://localhost:3000')
})