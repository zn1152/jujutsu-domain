let express = require('express');
let router = express.Router();
let appModel = require('../lib/appModel');//引入模型

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/search", function (req,res,next) {
  //查询数据
  appModel.find({}, function (err, docs) {
    if (err) {
      res.json({
        success: 'fail',
        data: null
      })
    } else {
      console.log(docs)
      res.json({
        success: 'true',
        data: docs
      })
    }
  })
})

module.exports = router;
