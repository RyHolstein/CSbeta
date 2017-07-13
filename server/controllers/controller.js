var mongoose = require('mongoose');
var Controller = require('./../controllers/controller');
var Person = mongoose.model("Person");

module.exports = {
  index : (req, res)=> {
    res.render('index');
  },


  add : (req, res)=>{
    var person = new Person(req.body);
    person.save((err, savedPerson)=>{
      if (err) {
        res.redirect('/');
      } else {
        res.redirect('/');
      }
    })
  },

  thankYou : (req, res) => {
    res.render('thankYou');
  },

  getallPersons : (req, res) => {
    Person.find({}, (errors, person) => {
      res.render('list', {person: person})
    })
  }





}//end of module exports
