var express = require('express');
const drinks_controllers= require('../controllers/drinks');
var router = express.Router();
/* GET drinks */
router.get('/', drinks_controllers.drinks_view_all_Page );


/* GET detail drinks page */
router.get('/detail', drinks_controllers.drinks_view_one_Page);

/* GET create drinks page */
router.get('/create', drinks_controllers.drinks_create_Page);

/* GET create update page */
router.get('/update', drinks_controllers.drinks_update_Page);

/* GET delete drinks page */
router.get('/delete', drinks_controllers.drinks_delete_Page);

module.exports = router;