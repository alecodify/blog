import mongoose from "mongoose";

const deletecomment = async(req, res) => {
    const commentModel = mongoose.model('comment');
    const commentId = req.params.commentId;

    const comment = await commentModel.findById(commentId);

    if (!comment) {
        return res.status(404).json({ status: 'Failed', message: 'Comment Not Found' });
    }

    if (comment.userId !== req.user.id && !req.user.isAdmin) {
        return res.status(403).json({status: 'Failed', message: 'You are not allowed to delete this comment'})
    }

    await commentModel.findByIdAndDelete(commentId);

    res.status(200).json({ status: 'Success', message: 'The comment has been deleted successfully' })
}

export default deletecomment;