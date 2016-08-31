/**
 * Description : All the repository related routes will be added here!
 */

var express = require('express');
var router = express.Router();

var repoCtrl = new(require('../controllers/repoController')).Repo();


router.get("/echoHello", repoCtrl.echoHello);
router.get("/repositoryDetails", repoCtrl.getRepositoryDetails);

module.exports = router;
