const mongoose = require('mongoose');
const schema = mongoose.schema;

const Working_personSchema = new Schema({
    Name:String,
    Surname:String,
    Bio:String,
    Department:String,
    createdAt:{
        type:Date,
        default:Date.now
    },
    Working_year:Number
});

module.exports = mongoose.model('Working_person',Working_personSchema);

