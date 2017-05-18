const express     = require('express'),
router      = express.Router();


router.get('/register', (req, res, next) =>{
    res.send('Register here.');
});

//Authenticate
router.post('/authenticate', (req, res, next) =>{
    res.send('Authenticate here.');
});

//Profile
router.get('/profile', (req, res, next) =>{
    res.send('profile here.');
});

//Validate
router.get('/validate', (req, res, next) =>{
    res.send('validate here.');
});


module.exports = router;