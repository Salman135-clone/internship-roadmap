const user = require('../models/authModel');
const bcrypt = require('bcrypt');

exports.registerUser = async (data) => {

    const { email, password } = data;

    const findExistingUser = await user.findOne({ email });

    if (findExistingUser) {
        res.status(409).json({
            messsage: "User already register with this email"
        })
    }

    if (!email || !password) {
        throw new Error("Field should not be empty");
    }

    const hashPass = await bcrypt.hash(password, 10);

    const addUser = await user.create({ email, password: hashPass });

    return addUser;

}

exports.loginUser = async (data) => {
    const { email, password } = data;

    const existingUser = await user.findOne({ email });

    if (!existingUser) {
        throw new Error(" Email not found ");
    }

    const matchPass = await bcrypt.compare(password, existingUser.password);

    if (!matchPass) {
        throw new Error(" Password not match ")
    }

    return existingUser;
}