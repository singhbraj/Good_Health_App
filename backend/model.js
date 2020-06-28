const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GoodH = new Schema({
    username:{
    type: String
    },
    password:{
        type: String
    },
    email:{
            type: String
           
    },
    contact_number:{
        type: String
        }
});

module.exports = mongoose.model('GoodH',GoodH);