var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('superagent');
var payPalPayment = require('./models/PayPalPayment.js');
var async = require('async');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;

var router = express.Router();

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


router.route('/PayPal/Payment').post(function(req, res) {
        async.waterfall([
            function(callback) {
                request
                    .post('https://api.sandbox.paypal.com/v1/oauth2/token')
                    .send("grant_type=client_credentials")
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('Authorization', 'Basic QVFmYjNPUFpTSXFzVkpiaFl0ODU2Q3FQOEk1aEttak9ad2psSnNYYm1nZEdEZWprSTZEa1JjcGxjVFlBNnVtR25yNDVxXzZuRlJINTRwaEk6RVA2Tmt6bmhrSjJ6TWRiX0l6Q21NU3BuYzB4ZE5mN09rbFE5N1JtNFU0OTg3SVUxc2VtQy1fNWVpRXk4UnBxc3VUWDcwQkdyWWdjU3R0bkM=')
                    .end(function (err, res) {
                        callback(err,res);
                    });
            },
            function(authRequestToken, callback)
            {
                token = authRequestToken.body.access_token;
                console.dir(token);
                //console.dir(payPalPayment);
                request
                    .post('https://api.sandbox.paypal.com/v1/payments/payment')
                    .send(payPalPayment)
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .end(function (err, res) {
                        callback(err,res)
                    });
            }
            ],
            function(payPalResponse) {
                res.json(payPalResponse.status, {msg : payPalResponse.body});
            });
});

app.use('/api', router);
app.listen(port);