const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require('mongoose');

const { Product, validateProduct } = require("../models/product");

// Query Operators
// eq => equal
// ne => not equal
// gt => greater than
// gte => greater than or equal
// lt => less than
// lte => less than or equal
// in => [10,20,30]
// nin => [10,20]

router.get("/", async (req, res) => {
  //const products = await Product.find();//Tüm verileri getirir
  //const products = await Product.find({ price: 1000, isActive: true });//Koşullu veri getirme
  //const products = await Product.find({ isActive:true }).limit(1).select({name: 1, price:1})//1 olanları listeler sadece, limit ile de kaç tane listeleyebilirsin onu veriyorsun burada 1 tanesini listele diyorsun
  //const products = await Product.find({ price: {$eq:10000}});//Fiyatı 10.000 olanları getirecek
  //const products = await Product.find(price: {$ne: 10000});//10.000 eşit olmayan ürünleri getirir
  //const products = await Product.find(price: {$gt: 10000});//10.000 büyük olan ürünleri getirir
  //const products = await Product.find(price: {$gte: 10000});//10.000 eşit olan ve büyük olanları ürünleri getirir
  //const products = await Product.find(price: {$lt: 10000});//10.000 küçük olan ürünleri getirir
  //const products = await Product.find(price: {$lte: 10000});//10.000 eşit olan ve küçük olan ürünleri getirir
  //const products = await Product.find(price: {$in: [10000, 2000]});//Fiyatları 10.000 ile 20.000 olanları getir
  //const products = await Product.find(price: {$nin: [10000, 2000]);//Fiyatları 10.000 ile 20.000 olmayanları getir
  //const products = await Product.find(price: {$gte: 10000, $lte2000);//10.000 ila 20.000 arasında olanları getir diyoruz
  //const products = await Product.find(price: {$ne: 10000});//10.000 eşit olmayan ürünleri getirir
  //const products = await Product.find(price: {$ne: 10000});//10.000 eşit olmayan ürünleri getirir
  // const products = await Product.find({ price: { $gte: 10000, $lte: 20000 }, name: "Samsung" }); // and
  // const products = await Product.find()
  //                             .or([
  //                                 { price: { $gte: 10000} },
  //                                 {isActive: true }
  //                             ]); // (price >= 10000 or isActive==true)

  // startwith
  // const products = await Product.find({ name: /^iphone/ });

  // endwith
  // const products = await Product.find({ name: /iphone$/ });
  const products = await Product.find(); //Tüm verileri getirir
  res.send(products);
});

router.post("/", async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    isActive: true,
  });
  try {
    const result = await product.save();
    res.send(result);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  
});

//PUT => Güncelleme yapılıyor
router.put("/:id", async (req, res) => {
  //  query first - findbyid
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).send("Aradığınız ürün bulunamadı");
  }
  const { error } = validateProduct(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  // Ürün güncelleme işlemi
  product.name = req.body.name;
  product.price = req.body.price;
  product.description = req.body.description;
  product.imageUrl = req.body.imageUrl;
  product.isActive = req.body.isActive;
  const updatedProduct = await product.save();
  res.send(updatedProduct);

  // save
  // const product = await Product.findByIdAndUpdate(req.params.id,{
  //     $set: {
  //         name: req.body.name,
  //         price: req.body.price,
  //         description: req.body.description,
  //         imageUrl: req.body.imageUrl,
  //         isActive: req.body.isActive,
  //     }
  // },{new: true});//Güncellenen product bilgisini bize geri döndürüyor
  // res.send(product);

  // update
  // const result = await Product.update({_id: req.params.id},{
  //     $set: {
  //         name: req.body.name,
  //         price: req.body.price,
  //         description: req.body.description,
  //         imageUrl: req.body.imageUrl,
  //         isActive: req.body.isActive,
  //     }
  // })
  // res.send(result);


});

//Silme İşlemi
router.delete("/:id", async (req, res) => {
    //const result = await Product.deleteOne({_id: req.params.id})
    const product = await Product.findByIdAndDelete(req.params.id);
    res.send(result);
    if (!product) {
        return res.status(404).send("aradığınız ürün bulunamadı");
      }

    //   const product = products.find((p) => p.id == req.params.id);
   
//   //Burada Konumunu buluyoruz
//   const index = products.indexOf(product);
//   products.splice(index, 1); //index numaralıyı 1 tanesini sil
//   res.send(product);
});

//id'ye göre veri getirme işlemi yapıyoruz
router.get("/:id", async (req, res) => {
  //const product = await Product.findOne({ _id: req.params.id});
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).send("aradığınız ürün bulunamadı");
  }
  res.send(product);
});

module.exports = router;
