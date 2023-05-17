var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */
router.get('/user-list', function(req, res, next) {
  db.query("SELECT * FROM users", function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});

/* GET user datas. */
router.get('/user/:id', function(req, res, next) {
  db.query("SELECT * FROM users WHERE id = ?", [req.params.id], function (err, data, fields) {
    if (err) throw err;
    res.render('user', { title: 'User Data', userData: data});
  });
});

module.exports = router;
