import mongoose from "mongoose";

const deletepost = async(req, res) =>{
    const postId = req.params.postId;
    const postModel = mongoose.model('post');

    if(!req.user.isAdmin || req.user.id !== req.params.userId){
        return res.status(403).json({status: 'Failed', message: 'You are not allowed to delete this post'})
    }

    await postModel.findByIdAndDelete(postId);
    res.status(200).json({ status: 'Success', message: 'The post has been deleted successfully' })
}

export default deletepost;