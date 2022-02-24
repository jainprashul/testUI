const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res) => {
    res.json(req.body);
});


module.exports = router;