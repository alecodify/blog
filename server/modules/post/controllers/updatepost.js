import mongoose from "mongoose";
import slugify from "slugify";

const updatepost = async(req, res) =>{
    const postId = req.params.postId;
    const postModel = mongoose.model('post');

    if (!req.user.isAdmin || req.user.id !== req.params.userId) {
        return res.status(403).json({status: 'Failed', message: 'You are not allowed to update this post'})
    }

    const slug = slugify(req.body.title, {
        lower: true,
        strict: true,
    });

    const post = await postModel.findByIdAndUpdate(postId, {
        $set:{
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            image: req.body.image,
            slug,
        }
    }, {new: true});

    res.status(200).json({ status: 'Success', message: 'The post has been updated successfully', updatedPost: post })

}

export default updatepost;