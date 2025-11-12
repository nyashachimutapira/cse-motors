// CSE Motors - Simple Express server
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 5500;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout');
app.use(expressLayouts);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`🚗 CSE Motors is running on http://localhost:${port}`);
});