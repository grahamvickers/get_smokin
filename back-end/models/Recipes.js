var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
    recipe: String,
    bio: String,
    cost: String,
    time: String,
    img: String,
    thumbnail: String,
    recipe_type: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);