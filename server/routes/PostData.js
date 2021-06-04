const express = require('express');
const {checkToken} = require('../auth/token_validation');

const router = express.Router();

const Authentication = require('../controllers/login');
const RegisterController = require('../controllers/register');
const AbonneController = require('../controllers/abonne');


router.post('/login', Authentication.authenticate);
router.post('/register', RegisterController.register);
router.post('/forgetpassword', Authentication.forgetpassword);

router.get('/getTypeAbonne', checkToken, AbonneController.getTypeAbonne);


module.exports = router;