import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const updateuser = async(req, res) => {
    const userModel = mongoose.model('user');
    const userId = req.params.userId;

    if (req.user.id !== userId) {
        return res.status(403).json({ status: 'Failed', message: 'You are not allowed to update this user' });
    }
    
    if (req.body.password) {
        if (req.body.password.length < 6) {
          return res.status(400).json({ status: 'Failed', message: 'Password must be at least 6 characters'})
        }
        req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    if (req.body.username) {
        if (req.body.username.length < 7 || req.body.username.length > 20) {
           return res.status(400).json({ status: 'Failed', message: 'Username must be between 7 and 20 characters'})
        }
        if (req.body.username.includes(' ')) {
           return res.status(400).json({ status: 'Failed', message: 'Username cannot contain spaces'})
        }
        if (req.body.username !== req.body.username.toLowerCase()) {
           return res.status(400).json({ status: 'Failed', message: 'Username must be lowercase'})
        }
        if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
           return res.status(400).json({ status: 'Failed', message: 'Username can only contain letters and numbers'})
        }
    }


    const updatedUser = await userModel.findByIdAndUpdate(userId, {
        $set: {
            username: req.body.username,
            email: req.body.email,
            imageUrl: req.body.imageUrl,
            password: req.body.password,
        },
    },{ new: true });

      const { password, ...rest } = updatedUser._doc;

      res.status(200).json({ status: 'Success', updatedUser: rest });
}

export default updateuser;