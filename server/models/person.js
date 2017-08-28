var mongoose = require('mongoose');



var PersonSchema = new mongoose.Schema({
  email: {type:String, required:[true, "Cannot Be Blank"]}
}, {timestamps: true})


mongoose.model('Person', PersonSchema);
var Person = mongoose.model("Person");
