# NodejsCRUD
English:

Hello everyone, in this project, I've performed CRUD operations using Node.js. Throughout this process, I utilized Express, Cors, Joi, MongoDB, and Mongoose.

To set up the project, start by typing the code below into your terminal and install the necessary packages:

npm install

Express: 🚀🚀

I initially installed Express and then configured the host operations in server.js. While setting up the host operations, I defined the port as 'process.env.PORT || 3000' to avoid conflicts with incoming hosts from the server, especially when deploying to production.

Cors:🌐🌐

I implemented Cors to prevent host conflicts when frontend users attempt to access the API. By doing so, I ensured that they wouldn't encounter the 'Access-Control-Allow-Origin' error when retrieving data.

MongoDB:🗄️🗄️

To leverage MongoDB, I installed Mongoose and used it for NoSQL data storage. All the project data is stored within MongoDB.

Joi:🛠️🛠️

I employed Joi for data addition and update operations, imposing restrictions to ensure that the data entered adhered to specific formats."


Türkçe:

Herkese merhaba buradaki projede Node.js ile Rest Api CRUD işlemleri yaptım. Bu işlemleri yaparken kullandıklarım;
Express, Cors, Joi, MongoDb, Mongoose kullandım.

Projeyi yüklerseniz ilk öncelikle alttaki kodu terminalinize yazın ve paketleri yükleyin.
npm install

Express:🚀🚀

İlk öncelikle express'i kurdum.  Sonra server.js içerisinde host işlemlerimi yaptım. host işlemlerini yaparken eğer canlıya almak istediğiniz zaman sunucudan gelen hostların karışmaması için port'unu 'process.env.PORT || 3000' tanımladım. 

Cors:🌐🌐

Cors'u kullandım. Eğer frontEnd'den api'yi çekmek istedikleri zaman gelen hostun bizim hostumuz ile çakışmamasını sağladım ve datayı çektiklerin 'Access-Control-Allow-Origin' hata kodunu görmemeleri için.

MongoDb:🗄️🗄️

MongoDb kullanmak için mongoose indirdim ve NoSql veri tutmak için mongoose kullandım. Verileri mongoDb'de tuttum.

Joi:🛠️🛠️

Joi ile veri ekleme ve güncelleme yapacağı zaman verilerin düzenli ve istenilen formatta girmesi için kısıtlamalar yaptım.