const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

let items = [];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    var options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    }
    var today = new Date();
    var day = today.toLocaleDateString("en-US", options); 
    res.render("days", {listTitle: day, newListItems: items});
});

app.post('/', (req, res) => {
    let item = req.body.userInput;
    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
});

app.get('/work', (req, res) => {
    res.render("days", {listTitle: "Work", newListItems:workItems});
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});