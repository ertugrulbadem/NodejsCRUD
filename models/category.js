const Joi = require("joi");
const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: String,
})

function validateCategory(product){
    const schema = {
        name: Joi.string().min(3).max(30).required()
    }
    return schema.validate(product);
}

const Category = mongoose.model("Category", categorySchema);

module.exports = { Category, validateCategory}