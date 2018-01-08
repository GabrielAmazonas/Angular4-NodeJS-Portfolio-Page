const express     = require('express'),
jwt = require('jsonwebtoken'),
router      = express.Router();

verifyToken = (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        // Get token from bearer
        const bearerToken = bearerHeader.split(' ')[1];

        //set token
        req.token = bearerToken

        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }

}


router.get('/register', (req, res, next) =>{
    res.send('Register here.');
});

//Login
router.post('/login', (req, res, next) =>{
     // Mock Profile
     const profile = {
        id: 1,
        username: 'Gabriel',
        email: 'gabriel@gmail.com'
    }
    //sign params: payload, secret key
    jwt.sign({profile}, 'secretkey',{expiresIn: '30m'}, (err, token) => {
        res.json({
            token
        });
    });
});

//Profile - Protected Route
router.post('/profile', verifyToken, (req, res, next) =>{
    // Mock Profile
    const profile = {
        id: 1,
        username: 'Gabriel',
        email: 'gabriel@gmail.com'
    }

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
        res.json({authData})
        }
    });
    
});

//Validate
router.get('/validate', (req, res, next) =>{
    res.send('validate here.');
});

//Token format:
// Authorization: Bearer <access_token>




module.exports = router;