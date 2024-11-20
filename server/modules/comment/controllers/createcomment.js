import mongoose from "mongoose";

const createcomment = async(req, res) => {
    const commentModel = mongoose.model('comment');
    const { content, postId, userId } = req.body;

    if (userId !== req.user.id) {
        return res.status(403).json({ status: 'Failed', message: 'You are not allowed to create this comment' });
    }

    const comment = await commentModel.create({
        content, 
        postId, 
        userId,
    })

    res.status(200).json({ status: 'Success', message: 'Comment Create Successfully', comment })


}

export default createcomment;