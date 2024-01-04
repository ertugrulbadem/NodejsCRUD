const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    imageUrl: String,
    date : {
        type: Date,
        default: Date.now
    },
    isActive: Boolean
});

function validateProduct(product){
    const schema = new Joi.object({
        name: Joi.string().min(3).max(40).required(),
        price: Joi.number().required(),
        description: Joi.string(),
        imageUrl: Joi.string(),
        isActive: Joi.boolean(),
    });
    //Biz bu şekilde validitaion ile kontrol ettiriyoruz
    //Validate ettiğinde tüm verileri Validate etmen gerekli
    //Bu şekil hatayı gösteriyoruz
    return schema.validate(product);
}


//Bu şekilde yukarıdaki şemayı productSchemayı model olarak yapıyoruz. Modellerin ilk harfleri büyük olur
const Product = mongoose.model("Product", productSchema);

module.exports = { Product, validateProduct };