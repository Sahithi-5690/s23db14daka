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
exports.drinks_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Drinks();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"drinks_type":"goat", "cost":12, "size":"large"}
    document.drinks_brand = req.body.drinks_brand;
    document.drinks_quantity = req.body.drinks_quantity;
    document.drinks_cost = req.body.drinks_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// Handle Drinks delete form on DELETE.
exports.drinks_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Drinks delete DELETE ' + req.params.id);
};
// Handle Drinks update form on PUT.
exports.drinks_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Drinks update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.drinks_view_all_Page = async function(req, res) {
    try{
    theDrinkss = await Drinks.find();
    res.render('Drinks', { title: 'Drinks Search Results', results: thedrinks });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };