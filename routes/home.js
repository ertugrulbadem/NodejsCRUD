const express = require("express");
const router = express.Router();

const products = [
    {id: 1, name: "iphone12", price: 2000},
    {id: 2, name: "iphone13", price: 3000},
    {id: 3, name: "iphone14", price: 4000},
]


router.get("/", (req,res)=>{
    res.send(products[0]);
})

module.exports = router;