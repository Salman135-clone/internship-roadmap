const userServ = require('../services/authService');

exports.signUp = async (req, res) => {
    try {
        const result = await userServ.signUp(req.body);
        res.status(201).json({
            message: "User Register Successfully",
            user: result
        })
    } catch (err) {
        if (err.message === "User Already Register" || "Field are empty") {
            return res.status(400).json({
                message: err.message
            })
        }
        res.status(500).json({ message: "Server Error" })
    }
}

exports.login = async (req, res) => {
    try {
        const userLogin = await userServ.login(req.body);
        res.status(200).json({
            message: "Login Successfully",
            user: userLogin.user,
            token: userLogin.token,
        })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}