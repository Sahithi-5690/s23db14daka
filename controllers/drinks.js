var Drinks = require('../models/drinks');
// List of all Drinkss
exports.drinks_list = async function(req, res) {
    try{
    thedrinks = await Drinks.find();
    res.send(thedrinks);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific Drinks.
exports.drinks_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Drinks detail: ' + req.params.id);
};
// Handle Drinks create on POST.
exports.drinks_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Drinks create POST');
};
// Handle Drinks delete form on DELETE.
exports.drinks_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Drinks delete DELETE ' + req.params.id);
};
// Handle Drinks update form on PUT.
exports.drinks_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Drinks update PUT' + req.params.id);
};

