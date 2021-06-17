//引入mongoose.js文件
var mongoose = require("./mongoose.js")
//定义schema
var schema = mongoose.Schema
const blog = new schema({
    //这里是数据库自己创建的 属性名:属性类型   如：
    "姓名" : String,
	"生日" : String,
	"享年" : String,
	"等级" : String,
	"高专入学方式" : String,
	"主要使用过的咒灵" : String,
	"兴趣·特长" : String,
	"喜欢的食物" : String,
	"讨厌的食物" : String,
	"压力来源" : String
})
//导出
module.exports = blog;