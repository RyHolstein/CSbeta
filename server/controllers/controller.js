var mongoose = require('mongoose');
// var Controller = require('./../controllers/controller');
var Person = mongoose.model("Person");

module.exports = {
  index : (req, res)=> {
    res.render('index');
  },

  add : (req, res)=>{
    Person.findOne(req.body).exec((err, foundPerson)=> {
      if(foundPerson) {
        console.log("email already in database");
        res.redirect('/')
  
      }else {
        var person = new Person(req.body);
        person.save((err, savedPerson)=>{
          if (err) {
            res.redirect('/');
          } else {
            console.log('added');
            res.redirect('/');

          }
        })

      }




    })
  },

  getallPersons : (req, res) => {
    Person.find({}, (errors, person) => {
      res.render('list', {person: person})
    })
  }





}//end of module exports
