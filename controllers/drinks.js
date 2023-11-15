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
exports.drinks_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Drinks.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.drinks_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Drinks.findById( req.params.id)
    // Do updates of properties
    if(req.body.drinks_brand)
    toUpdate.drinks_brand = req.body.drinks_brand;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.quantity) toUpdate.quantity = req.body.quantity;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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