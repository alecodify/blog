import mongoose from "mongoose";

const getpostcomments = async(req, res) => {
    const commentModel = mongoose.model('comment');
    const postId = req.params.postId;

    const comments = await commentModel.find({ postId }).sort({
        createdAt: -1
    });

    res.status(200).json({ status: 'Success', comments});
}

export default getpostcomments;