const User = require('../model/user/user')
const Admin=require("../model/admin/admin")
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const Token = require('../model/user/token')
const sendEmail = require('../service/sendEmail')
const jwt = require('jsonwebtoken');
//User Registration
const userRegistration = async (req, res, next) => {
    try {
        console.log("inside registration");
        const { name, email, password } = req.body;
        console.log(req.body);
        const check = await User.findOne({ email: email })
        if (check) {
            return res.status(400).send({ message: "Email alredy exist" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            name: name,
            email: email,
            password: hashedPassword
        })
        const added = await user.save()
        const token = crypto.randomBytes(32).toString("hex")
        const Ttoken = await new Token({
            userId: added._id,
            token: token
        }).save();
        await User.findOne({ email: email })
        const url = `${process.env.FRONT_END_URL}/user/${added._id}/verify/${Ttoken.token}`
        sendEmail(user.email, " HAVEN mail verification", url)
        return res.status(201).send({ message: "An Email has been sent to your account please Verify" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error })
    }
}

const verify = async (req, res) => {
    try {
        console.log("inside verify route");

        const id = req.params.id;
        const token = req.params.token;

        // Find the user by id
        const user = await User.findOne({ _id: id });
        console.log("user", user);

        // If user is not found, return an error
        if (!user) {
            return res.status(400).send({ message: "Invalid link" });
        }

        const findtoken = await Token.findOne({ token: token });
        console.log(findtoken, "tokennn");

        // If token is not found, return an error
        if (!findtoken) {
            return res.status(400).send({ message: "Invalid token" });
        }

        // Update user's email verification status
        const verify = await User.updateOne({ _id: id }, { $set: { isMailVerified: true } });
        console.log("user verified", verify);

        // Delete the token
        const deleteToken = await Token.deleteOne({ token: token });
        console.log("token deleted", deleteToken);

        // Respond with success message
        res.json({ message: "success" });
    } catch (error) {
        console.error("Error verifying email:", error);
        res.status(500).send({ message: "Verification failed" });
    }
};

// Backend API endpoint to check if an email exists
const checkEmail= async (req, res) => {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        // If email exists, return true
        return res.json({ exists: true });
      }
      // If email does not exist, return false
      return res.json({ exists: false });
    } catch (error) {
      console.error('Error checking email:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const userLogin = async (req, res) => {
    try {
        let url;
        let token; // Declare inside the block where it's used
        const user = await User.findOne({ email: req.body.email });
        console.log("inside user");
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        const hashedPassword = user.password;
        const password = await bcrypt.compare(req.body.password, hashedPassword);
        console.log("compared", password);
        if (!password) {
            return res.status(404).send({ message: "Password not matched" });
        }
        if (user.isBlocked) {
            return res.status(404).send({ message: "Your account is suspended" });
        }
        if (user.isMailVerified === false) {
            console.log("inside email verification");
            token = await Token.findOne({ userId: user._id });
            if (!token) {
                console.log("inside token generation");
                const tokenGen = crypto.randomBytes(32).toString("hex");
                token = await new Token({
                    userId: user._id,
                    token: tokenGen
                }).save();
                url = `${process.env.FRONT_END_URL}/user/${user._id}/verify/${token.token}`;
                console.log("url", url);
                sendEmail(user.email, "HAVEN mail verification", url);
                return res.status(400).send({ message: "An Email has been sent to your account. Please verify." });
            }
            url = `${process.env.FRONT_END_URL}/user/${user._id}/verify/${token.token}`;
            console.log("url", url);
            sendEmail(user.email, "HAVEN mail verification", url);
            return res.status(400).send({ message: "An Email has been sent to your account. Please verify." });
        }
        const { _id } = user.toJSON();
        const jwtToken = jwt.sign({ _id }, process.env.JWT_USER_SECRET_KEY, { expiresIn: '1h' });
        console.log("user token", jwtToken);
        
        // Set the JWT token in a cookie
        res.cookie('token', jwtToken, {
            httpOnly: true,
            maxAge: 3600000, // 1 hour
            secure: process.env.NODE_ENV === 'production' // set to true in production
        });
        
        res.status(200).json({
            token: jwtToken
        });

    } catch (error) {
        console.error("Error in user login:", error);
        res.status(500).send({ message: "Error in user login" });
    }
};

const check = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];


        if (!token) {
            return res.status(401).json({
                auth: false,
                status: "failed",
                message: "No token provided",
            });
        }


        jwt.verify(token, process.env.JWT_USER_SECRET_KEY, (err, decoded) => {
            if (err) {
                console.log("errorororororo");
                return res.status(401).json({
                    auth: false,
                    status: "failed",
                    message: "Failed to authenticate",
                });
            } else {
                console.log("inside else block.......");
                console.log(decoded._id);
                req.headers.userId = decoded._id; // Assuming user ID is stored in '_id'
                return res.status(200).send({
                    message: 'success',
                });
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "failed",
            message: "Internal server error",
        });
    }
    
    
}
const adminRegistration = async (req, res, next) => {
    try {
        console.log("inside registration");
        const { name, email, password } = req.body;
        console.log(req.body);
        const check = await Admin.findOne({ email: email })
        if (check) {
            return res.status(400).send({ message: "Email alredy exist" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new Admin({
            name: name,
            email: email,
            password: hashedPassword
        })
        const added = await user.save()
        const token = crypto.randomBytes(32).toString("hex")
        const Ttoken = await new Token({
            userId: added._id,
            token: token
        }).save();
        await Admin.findOne({ email: email })
        const url = `${process.env.FRONT_END_URL}/user/${added._id}/verify/${Ttoken.token}`
        sendEmail(user.email, " HAVEN mail verification", url)
        return res.status(201).send({ message: "An Email has been sent to your account please Verify" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error })
    }
}



module.exports = {
    userRegistration,
    adminRegistration,
    verify,
    checkEmail,
    userLogin,
    check
}