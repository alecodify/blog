import mongoose from "mongoose";

const likecomment = async(req, res) =>{
    const commentModel = mongoose.model('comment');
    const commentId = req.params.commentId;

    const comment = await commentModel.findById(commentId);

    if (!comment) {
        return res.status(404).json({ status: 'Failed', message: 'Comment Not Found' });
    }

    const user = comment.likes.indexOf(req.user.id);

    if (user === -1) {
        comment.numberOfLikes += 1;
        comment.likes.push(req.user.id);
    } else {
        comment.numberOfLikes -= 1;
        comment.likes.splice(userIndex, 1);
    }

    await comment.save();

    res.status(200).json({ status: 'Success', message: 'Comment Like Succesfully', comment });
}

export default likecomment;