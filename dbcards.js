const mongoose = require('mongoose');
const Schema = mongoose.Schema

const cardsSchema = mongoose.Schema({
    name: String,
    image: String
})

module.exports = mongoose.model('Cards', cardsSchema);


