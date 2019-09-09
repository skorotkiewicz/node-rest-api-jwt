const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

module.exports = {
    create: async function(req, res) {

        try {
            var username = req.body.name.trim();
            var email = req.body.email.trim();
            var password = req.body.password.trim();

            // check if user exist
            const user = await User.find({name : username});
            if (!user.length) {
                // create new user
                const result = await User.create({
                    name: username,
                    email: email,
                    password: bcrypt.hashSync(password, saltRounds) // hash user password before saving into database
                });
                res.json({
                    status: "success",
                    message: "User added successfully",
                    data: result
                });
            } else {
                res.json({ status: "error", message: "User exists" });
            }

        } catch (err) {
            res.status(200).json({ status: 'error' });
        }
    },

    authenticate: async function(req, res) {
        try {
            const userInfo = await User.findOne({ email: req.body.email });
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                res.json({
                    status: "success",
                    message: "user found",
                    data: {
                        user: userInfo,
                        token: token
                    }
                });
            } else {
                res.json({
                    status: "error",
                    message: "Invalid email/password",
                    data: null
                });
            }
        } catch (err) {
            res.status(200).json({ status: 'error' });
        }
    }
}