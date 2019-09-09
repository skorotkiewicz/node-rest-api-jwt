const express    = require('express');
const app        = express();

const logger     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const jwt        = require('jsonwebtoken');
require('dotenv/config');

// Import Routes
const users      = require('./routes/users');
const posts      = require('./routes/posts');
const actions    = require('./routes/actions');

// Connect do DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
    console.log('Connected do DB!')
);

app.set('secretKey', 'yourRandomSecret'); // jwt secret token
app.use(logger('dev'));
app.use(bodyParser.json());

// Public routes
app.use('/', posts);
app.use('/users', users);

// Private routes (for authorised users)
app.use('/action', validateUser, actions);



function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
        if (err) {
            res.json({
                status: "error",
                message: err.message,
                data: null
            });
        } else {
            // add user id to request
            req.body.userId = decoded.id;
            next();
        }
    });
} 

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
}); 

// handle errors
app.use(function(err, req, res, next) {
    if (err.status === 404)
        res.status(404).json({ message: "Not found" });
    else
        res.status(500).json({ message: "Something looks wrong" });
});

app.listen(3000);