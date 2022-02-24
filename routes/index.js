const router = require('express').Router();
const { validateSignup } = require('../utils');

router.get('/', (req, res) => {
    res.status(200).render('signup');
});

router.post('/signup', validateSignup , (req, res) => {
    res.status(200).render('postsignup', {
        ...req.body
    });
});

router.get('*', (req, res) => {
    res.status(404).render('404');
});


module.exports = router;