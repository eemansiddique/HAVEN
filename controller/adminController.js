const Admin = require('../model/admin/admin')
const User = require('../model/user/user')
const Expert = require('../model/expert/expert')
const sendEmail = require('../service/sendEmail')


const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
//Admin login
const adminlogin = async (req, res) => {
    console.log("inside admin");
    const AdminDetails = await Admin.findOne({ email: req.body.email });
    if (!AdminDetails) {
        return res.status(404).send({
            message: "Admin not Found"
        });
    }

    // Compare passwords using bcrypt.compare
    const passwordMatch = await bcrypt.compare(req.body.password, AdminDetails.password);
    if (!passwordMatch) {
        console.log("Passwords don't match");
        return res.status(404).send({
            message: "Password is Incorrect"
        });
    }

    const token = jwt.sign({ _id: AdminDetails._id }, process.env.JWT_ADMIN_SECRETKEY, { expiresIn: 3600 });
    console.log(token);
    res.status(200).json({ token });
};
const listUsers = async (req, res) => {
    try {
        const allUsers = await User.find({})
        console.log(allUsers, "usersss");
        res.status(200).json({ allUsers })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "error in list users" })
    }
}
const listExperts = async (req, res) => {
    try {

        const allExperts = await Expert.find({})

        res.status(200).json({ allExperts })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "error in experts listing" })
    }
}

const blockUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })

        if (user.isBlocked == true) {
            await User.updateOne({ _id: req.params.id }, { $set: { isBlocked: false } })

            sendEmail(user.email, "Account Retained",
                `dear user,
   We are happy announce that you're account is retained`)
            res.status(200).send({ message: "user unblockeddd" })
        } else {
            await User.updateOne({ _id: req.params.id }, { $set: { isBlocked: true } })
            sendEmail(user.email, "Account Suspended",
                `dear user,
        It is noticed that,you act against our community guidlines`)
            res.status(200).send({ message: "user blockeddd" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "error in block user" })
    }
}





module.exports = {
    adminlogin,
    listUsers,
    listExperts,
    blockUser
}
