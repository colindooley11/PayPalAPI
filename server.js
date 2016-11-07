var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var paymentIntent =

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


router.route('/PayPal/Payment')

    .post(function(req, res) {
        console.dir(req.body);

        // authenticate request

        // make request to PayPal

        // save off Response

        res.json(req.body);
    });

app.use('/api', router);

app.listen(port);