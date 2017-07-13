
var mongoose = require('mongoose');
var Controller = require('./../controllers/controller');


module.exports = function(app){
//get routes
  app.get('/', Controller.index);
  app.get('/ThankYou', Controller.thankYou);
  app.get('/list', Controller.getallPersons);
//post routes
  app.post('/rsvp', Controller.add);




} //end
