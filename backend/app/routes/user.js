/**
 * 
 */

var express = require('express');
var router = express.Router();

var UserCtrl = new(require('../controllers/userController')).User();


router.get("/userByName", UserCtrl.getUserByDetailsName);
router.get("/UsersListByRange", UserCtrl.UsersListByRange);
router.get("/userslist", UserCtrl.getUsersList);
router.get("/echoHello", UserCtrl.echoHello);

module.exports = router;
