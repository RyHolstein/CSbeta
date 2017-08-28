
var mongoose = require('mongoose');
var Controller = require('./../controllers/controller');


module.exports = function(app){
//get routes
  app.get('/', Controller.index);
  app.get('/list', Controller.getallPersons);
//post routes
  app.post('/add_user', Controller.add);




} //end
