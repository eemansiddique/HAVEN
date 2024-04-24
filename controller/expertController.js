const Expert = require('../model/expert/expert')
const bcrypt = require('bcryptjs');
const crypto = require('crypto')
const Token = require('../model/user/token')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const sendEmail = require('../service/sendEmail')

const expertRegistration1 = async (req, res) => {
    try {
        console.log("inside expert registration");
        console.log(req.body);

        console.log(req.body);
        const { name, email, contact, password, profileImage, governmentId, city, dob } = req.body;

        const check = await Expert.findOne({ email: email })
        if (check) {
            return res.status(400).send({ message: "Email already taken" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const expert = new Expert({
            name: name,
            email: email,
            password: hashedPassword,
            contact: contact,
            profileImage: profileImage,
            governmentId: governmentId,
            city: city,
            dob: dob
        })
        const saved = await expert.save()
        console.log(saved, " expert saved");
        const objectId = saved._id
        const expertid = objectId.toHexString();

        if (saved) {
            return res.status(200).json({ expertid })
        } else {
            return res.status(404).send({ message: "Error in expert registration1" })
        }
    } catch (error) {
        res.status(500).send({ message: "Error in expert registration1" })
        console.log(error);
    }
}

const expertRegistration2 = async (req, res) => {
    try {
        console.log("inside expert registration2");
        console.log(req.body);
        
        // Extract the ID and form data from the request body
        const { id, educationalQualification, educationalInstitute, specialization, experience, certification } = req.body;

        // Attempt to find the expert in the database using the provided ID
        const verifyExpert = await Expert.findOne({ _id: id });
        
        // If the expert is not found, return a 403 status code
        if (!verifyExpert) {
            return res.status(403).send({ message: "Please complete the first stage of registration" });
        }

        // Update the expert's information in the database
        const updateExpert = await Expert.updateOne(
            { _id: id },
            {
                $set: {
                    educationalQualification: educationalQualification,
                    educationalInstitute: educationalInstitute,
                    specialization: specialization,
                    experience: experience,
                    certification: certification,
                },
            }
        );

        // Log the result of the update operation
        console.log(updateExpert);

        // Return a response indicating the success or failure of the registration process
        if (updateExpert) {
            return res.status(200).json({ expertid: id });
        } else {
            return res.status(404).send({ message: "Error in expert registration2" });
        }
    } catch (error) {
        // Handle any errors that occur during the registration process
        res.status(500).send({ message: "Error in expert registration2" });
        console.log(error);
    }
};

// registration form3

const expertRegistration3 = async (req, res) => {
    try {
        console.log("inside expert registration3");
        console.log(req.body);
        
        // Check if req.body is undefined or null
        if (!req.body || !req.body.id || !req.body.bio || !req.body.websiteLink || !req.body.services || !req.body.hourlySessionCharge || !req.body.languages || !req.body.idealClient) {
            return res.status(400).send({ message: "Missing required fields in form3" });
        }

        const { id, bio, websiteLink, services, hourlySessionCharge, languages, idealClient } = req.body;
        const expertid = id;

        const verifyExpert = await Expert.findOne({ _id: expertid });
        if (!verifyExpert) {
            return res.status(403).send({ message: "Please complete the second stage of registration" });
        }

        const updateExpert = await Expert.updateOne(
            { _id: expertid },
            { $set: { bio: bio, websiteLink: websiteLink, services: services, hourlySessionCharge: hourlySessionCharge, languages: languages, idealClient: idealClient } }
        );

        if (updateExpert) {
            return res.status(200).send({ message: "Expert registration stage 3 completed" });
        } else {
            return res.status(404).send({ message: "Error in expert registration3" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error in expert registration3" });
    }
};

const expertLogin = async (req, res) => {
    try {
        const expert = await Expert.findOne({ email: req.body.email });
        if (!expert) {
            return res.status(404).send({ message: "User not found" });
        }

        const hashedPassword = expert.password;
        const passwordMatch = await bcrypt.compare(req.body.password, hashedPassword);
        if (!passwordMatch) {
            return res.status(404).send({ message: "Incorrect password" });
        }

        if (expert.isBlocked) {
            return res.status(404).send({ message: "Your account is suspended" });
        }

        if (!expert.isMailVerified) {
            const token = await Token.findOne({ userId: expert._id });
            if (!token) {
                const tokenGen = crypto.randomBytes(32).toString("hex");
                const newToken = new Token({
                    userId: expert._id,
                    token: tokenGen
                });
                await newToken.save();

                const verificationUrl = `${process.env.FRONT_END_URL}experts/${expert._id}/verify/${tokenGen}`;
                console.log("Verification token generated:", tokenGen);
                await sendEmail(expert.email, "Haven Email Verification", verificationUrl);
            }
            return res.status(400).send({ message: "An email has been sent to your account. Please verify." });
        }

        const token = jwt.sign({ _id: expert._id }, process.env.JWT_EXPERT_SECRETKEY, { expiresIn: 3600 });
        res.status(200).json({ token });
    } catch (error) {
        console.error("Error in expert login:", error);
        res.status(500).send({ message: "Error in expert login" });
    }
};

const verify = async (req, res) => {
    try {
        console.log("inside expert verification");
        const id = req.params.id
        const token = req.params.token
        const expert = await Expert.findOne({ _id: id })
        console.log("userrr", expert);
        if (!expert) {
            return res.status(400).send({ message: "invalid Link" })
        }
        const findtoken = await Token.findOne({ token: token })
        console.log(findtoken, "tokennn");
        if (!findtoken) {
            return res.status(400).send({ message: "invalid token" })
        }
        const verify = await Expert.updateOne({ _id: id }, { $set: { isMailVerified: true } })
        console.log("user verified");
        if (verify) {
            const deleteToken = await Token.deleteOne({ token: token })
            res.json({ message: "success" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error occured in email verification" })
    }
}

module.exports = {
        expertRegistration1,
        expertRegistration2,
        expertRegistration3,
        expertLogin,
        verify,
    }