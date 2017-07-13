var mongoose = require('mongoose');



var PersonSchema = new mongoose.Schema({
  name: {type:String, required:[true, "Cannot Be Blank"]},
  email: {type:String, required:[true, "Cannot Be Blank"]}
}, {timestamps: true})


mongoose.model('Person', PersonSchema);
var Person = mongoose.model("Person");
