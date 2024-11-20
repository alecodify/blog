import mongoose from "mongoose";

const deleteuser = async(req, res) => {
    const userModel = mongoose.model('user');
    const userId = req.params.userId;

    if (!req.user.isAdmin && req.user.id !== userId) {
        return res.status(403).json({ status: 'Failed', message: 'You are not allowed to delete thuis user' });
    }

    await userModel.findByIdAndDelete(userId);

    res.status(200).json({ status: 'Success', message: 'User Deleted Successfully'});

}

export default deleteuser;