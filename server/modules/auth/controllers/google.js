import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwtManager from "../../../manger/jwtManager.js";

const google = async(req, res) => {
    const { email, name, googlePhotoUrl } = req.body;
    const userModel = mongoose.model('user');

    const user = await userModel.findOne({ email });
    if (user) {
        const accessToken = jwtManager(user);
        const { password: pass, ...rest } = user._doc;
        res.cookie('accessToken', accessToken).status(200).json({ status: "Success", message: "User LoggedIn Successfully", token: accessToken, user: rest });
    } else {
        const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
        const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
        const newUser = await userModel.create({
            username: `${name.toLowerCase().split(" ").join("")}_${Date.now()}`,
            email,
            password: hashedPassword,
            imageUrl: googlePhotoUrl,
        })

        const accessToken = jwtManager(newUser);
        const { password: pass, ...rest } = newUser._doc;

        res.cookie('accessToken', accessToken).status(200).json({ status: "Success", message: "User LoggedIn Successfully", token: accessToken, user: rest });
    }

}

export default google;