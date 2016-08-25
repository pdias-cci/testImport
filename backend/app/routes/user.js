/**
 * Created by shediv on 03/08/15.
 */

var express = require('express');
var router = express.Router();

var UserCtrl = new (require('../controllers/user')).User();
this.config = require('../config/config.js');


router.get("/UsersListByRange", UserCtrl.UsersListByRange)
router.get("/userslist", UserCtrl.getUsersList);
router.get("/echoHello", UserCtrl.echoHello); //... Get all users
// router.post("/", UserCtrl.loginUser); //... Login API
// router.post('/fblogin', UserCtrl.facebookSignin); //.. FB Reg API
// router.post("/:id", UserCtrl.updateUserByID); //... Search user base on ID

module.exports = router;
