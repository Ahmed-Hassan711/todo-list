const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const items = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    }
    var today = new Date();
    var day = today.toLocaleDateString("en-US", options); 
    res.render("days", {presentDay: day, newListItems: items});
});

app.post('/', (req, res) => {
    var item = req.body.userInput;
    items.push(item);
    res.redirect('/');
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});