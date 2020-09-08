let mongoose = require('mongoose');

let teacherSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    dob:Date,
    address:{
        country: {
            type: String,
            validate:{
                validator: function(newCountry){
                    return newCountry.length >= 3 && newCountry.length <= 15; 
                },
                message:'Country should be between 3 and 15 chars'
            }
        },
        state: String
    },
    created:{
        type: String,
        default: Date.now()
    }
});

module.exports = mongoose.model('Teacher',teacherSchema);