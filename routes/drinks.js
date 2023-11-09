var express = require('express');
const drinks_controllers= require('../controllers/drinks');
var router = express.Router();
/* GET drinks */
router.get('/', drinks_controllers.drinks_view_all_Page );
module.exports = router;