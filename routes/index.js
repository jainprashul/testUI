const router = require('express').Router();
const { validateSignup } = require('../utils');

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/signup', validateSignup , (req, res) => {
    res.render('postsignup', {
        ...req.body
    });
});


module.exports = router;