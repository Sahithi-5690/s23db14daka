var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var drinks_controller = require('../controllers/drinks');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// drinks ROUTES ///
// POST request for creating a drinks.
router.post('/drinks', drinks_controller.drinks_create_post);
// DELETE request to delete drinks.
router.delete('/drinks/:id', drinks_controller.drinks_delete);
// PUT request to update drinks.
router.put('/drinks/:id', drinks_controller.drinks_update_put);
// GET request for one drinks.
router.get('/drinks/:id', drinks_controller.drinks_detail);
// GET request for list of all drinks items.
router.get('/drinks', drinks_controller.drinks_list);
module.exports = router;