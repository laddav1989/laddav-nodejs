var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/list', function(req, res, next) {
  db.query("SELECT * FROM users2", function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});

/* GET user datas. */
router.get('/:id', function(req, res, next) {
  db.query("SELECT * FROM users2 WHERE id = ?", [req.params.id], function (err, data, fields) {
    if (err) throw err;
    res.render('user', { title: 'User Data', userData: data});
  });
});

/* UPDATE user api token. */
router.post('/new-token', function(req, res) {
  var aD = new Date();
  var randomString = Math.random().toString(36).slice(2, 7)+'-'+aD.getFullYear()+aD.getMonth()+aD.getDate()+aD.getHours()+aD.getMinutes()+aD.getSeconds();
  db.query("UPDATE users2 SET api_token=? WHERE id = ?", [randomString, req.body.id], function (err, data, fields) {
    if (err) throw err;
    res.redirect('/users/'+req.body.id);
  });
});

module.exports = router;
