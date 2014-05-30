var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Index' });
});

/* GET Hello World page. */
router.get('/form', function(req, res) {
	res.render('form', { title: 'Form' })
});

// /* POST to Add User Service */
// router.post('/submit', function(req, res) {

//     // Set our internal DB variable
//     var db = req.db;

//     // Get our form values. These rely on the "name" attributes
//     var userName = req.body.username;
//     var userEmail = req.body.useremail;

//     // Set our collection
//     var collection = db.get('usercollection');

//     // Submit to the DB
//     collection.insert({
//         "username" : userName,
//         "email" : userEmail
//     }, function (err, doc) {
//         if (err) {
//             // If it failed, return error
//             res.send("There was a problem adding the information to the database.");
//         }
//         else {
//             // If it worked, set the header so the address bar doesn't still say /adduser
//             res.location("userlist");
//             // And forward to success page
//             res.redirect("userlist");
//         }
//     });
// });

module.exports = router;