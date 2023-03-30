const mongoose = require('mongoose');

const cardsSchema = mongoose.Schema({
    name: String,
    image: String
})

module.exports = mongoose.model('card', cardsSchema);


