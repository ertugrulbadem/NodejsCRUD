const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const products = require("./routes/product");
const home = require("./routes/home");
const categories = require("./routes/categories");
const jobs = require("./routes/jobs");

// mongo cluster0 password --> s8GWqbMyq8B4xWUs
// username --> ertugrulbdm

app.use(express.json());

//mongoose.connect("mongodb+srv://ertugrulbdm:asd1907@cluster0.es4yqqe.mongodb.net/deneme?retryWrites=true&w=majority")
//Burada bağlantı sağlıyoruz

mongoose.connect("mongodb+srv://ertugrulbdm:s8GWqbMyq8B4xWUs@cluster0.kqq8paz.mongodb.net/deneme?retryWrites=true&w=majority")

const db= mongoose.connection;
db.on('error', console.log.bind(console, "Connection error"));
db.once("open", ()=>{
    console.log("Connected to MongoDB");
})



//Aşağıdakini kullanmak yerine bu daha hızlı ve okunabilir
app.use(cors({
    origin: "*",//Burada Hangi uzantılı hostları alsın bunu belirliyoruz. "*" hepsini al demek
    //methods: ["GET"]//Bunu dediğimiz zaman sadece get işlemi yapan bir servis olur
}))

//

//mongodb - mysql
//mongoose - sequelize

app.use("/api/products",products);
app.use("/api/categories", categories);
app.use("/api/jobs", jobs)
app.use("/", home);

//Değer gelip listelemek için kullanıyoruz
app.get("/", (req, res) =>{
    res.send(products[0]);
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})









//cors npm paketini kullanmazsan bunu yapıyorsun
//Bu işlemleri yapıp hemen ilgili uzantıya next ettiriyoruz
//Burada FrontEndden gelen başka host'u çakışmasın hemen çalışsın diye yapıyoruz
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");//Yıldız olan yere adres bilgisi yazın ya da * ise tüm gelen portları bahsediyoruz
//     res.setHeader("Access-Control-Allow-Methods","GET");
//     next();
// });