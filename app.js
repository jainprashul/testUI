const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;