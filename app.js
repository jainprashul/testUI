const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/signup', (req, res) => {
    res.json(req.body);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



module.exports = app



