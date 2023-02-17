const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let day = new Date();
    let currentDay = day.getDay();
    let dayToday = '';

    switch (currentDay) {
        case 0:
            dayToday = 'Sunday';
            break;
        case 1:
            dayToday = 'Monday';
            break;
        case 2:
            dayToday = 'Tuesday';
            break;
        case 3:
            dayToday = 'Wednesday';
            break;
        case 4:
            dayToday = 'Thursday';
            break;
        case 5:
            dayToday = 'Friday';
            break;
        case 6:
            dayToday = 'Saturday';
            break;
    
        default:
            console.log(`Error! Day today is ${currentDay}`);
            break;
    };
    res.render("days", {presentDay: dayToday});
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});