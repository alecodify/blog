import mongoose from "mongoose";

const getuser = async(req, res) => {
    const userModel = mongoose.model('user');
    const userId = req.params.userId;

    const user = await userModel.findById(userId);

    if (!user) {
        return res.status(404).json({ status: 'Failed', message: 'User Not Found' });
    }

    const { password: pass, ...rest } = user._doc;

    res.status(200).json({status: 'Success', rest });
}

export default getuser;