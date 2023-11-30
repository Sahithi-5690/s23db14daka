var express = require('express');
const drinks_controllers= require('../controllers/drinks');
var router = express.Router();
/* GET drinks */
router.get('/', drinks_controllers.drinks_view_all_Page );


/* GET detail drinks page */
router.get('/detail', drinks_controllers.drinks_view_one_Page);

/* GET create drinks page */
router.get('/create', drinks_controllers.drinks_create_Page);

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}


/* GET create update page */
router.get('/update', secured,drinks_controllers.drinks_update_Page);
router.get('/delete', secured,drinks_controllers.drinks_delete_Page);
router.get('/detail', secured,drinks_controllers.drinks_detail);

/* GET delete drinks page */
router.get('/delete', drinks_controllers.drinks_delete_Page);

module.exports = router;