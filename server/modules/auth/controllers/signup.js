import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const signup = async (req, res) =>{
    const { username, email, password } = req.body;
    const userModel = mongoose.model('user');

    if (!username) throw "User Name is Required";
    if (!email) throw "Email is Required";
    if (!password) throw "Password is Required";

    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
        return res.status(409).json({ status: 'Failed', message: 'User Already Exist'})
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = await userModel.create({
        username,
        email,
        password: hashedPassword,
      });
    
      const { password: pass, ...rest } = newUser._doc;
     
      res.status(201).json({ status: "Success", message: "New User Registered Successfully", user: rest });

}

export default signup;