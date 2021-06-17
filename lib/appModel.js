//引入mongoose.js 文件
var mongoose = require("./mongoose");
//引入schema.js 文件
var schema = require("./schema");
//定义模型 表名为our
var appModel = mongoose.model("runoob", schema,'runoob');
//导出
module.exports = appModel;