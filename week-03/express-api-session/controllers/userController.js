const userService = require('../services/userService');

exports.registerUser = async (req, res) => {
    try {
        const result = await userService.registerUser(req.body);
        res.status(201).json({
            message: "user created",
            user: result
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

exports.loginUser = async (req, res) => {
    try {

        const result = await userService.loginUser(req.body);

        req.session.userId = result._id.toString();


        res.status(200).json({
            message: "Login Successfully",
            user: {
                id: result._id,
                email: result.email
            }
        })
    } catch (err) {
        res.status(401).json({
            message: err.message || "Invalid credentials"
        });
    }
}