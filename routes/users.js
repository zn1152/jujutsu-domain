var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/add", function (req, res) {
  //插入数据
  mongo.insertMany({
    "姓名": req.body['姓名'],
    "生日": req.body['生日']
    // "享年": req.body.name,
    // "等级": req.body.name,
    // "高专入学方式": req.body.name,
    // "主要使用过的咒灵": req.body.name,
    // "兴趣·特长": req.body.name,
    // "喜欢的食物": req.body.name,
    // "讨厌的食物": req.body.name,
    // "压力来源": req.body.name
  }).then((data) => {
    console.log('插入成功');
  }).catch((err) => {
    console.log('插入失败');
  });
  res.send("添加成功")
})
module.exports = router;
