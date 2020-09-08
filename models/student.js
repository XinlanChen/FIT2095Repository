let mongoose = require('mongoose');

let studentSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:String,
    numUnits:{
        type:Number,
        min:0,
        max:4
    },
    teacher:{
        type:mongoose.Types.ObjectId,
        ref:'Teacher'
    }
});

module.exports = mongoose.model('Student',studentSchema);