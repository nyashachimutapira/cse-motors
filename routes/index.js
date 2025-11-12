const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
    res.render('index', {
        title: 'CSE Motors | Your Dream Car Awaits',
        page: 'home'
    });
});

module.exports = router;