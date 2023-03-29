const User = require("../models/userModel")

const registerUser = (req, res) => {
    res.send("Register Working")
}
const loginUser = (req, res) => {
    res.send("login Working")
}
const getUser = (req, res) => {
    res.send("user route Working")
}
module.exports = {
    registerUser,
    loginUser, 
    getUser
}