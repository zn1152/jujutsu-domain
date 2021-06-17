 //先引入mongoose模块
 var mongoose = require("mongoose");
 //连接数据库服务器
 mongoose.connect('mongodb://106.14.187.172:27017/admin', {
     useNewUrlParser: true,
     useUnifiedTopology: true
 }, function (error) {
     if (error) {
         console.log(error,"数据库连接失败")
     } else {
         console.log("数据库连接成功")
     }
 })
 //导出
 module.exports = mongoose;