import mongoose from "mongoose";
import slugify from "slugify";

const createpost = async(req, res) =>{
    const postModel = mongoose.model('post');
    const { title, content } = req.body;
    
    if (!req.user.isAdmin) {
        return res.status(403).json({status: 'Failed', message: 'You are not allowed to create a post'});
    }
    
    if (!req.body.title || !req.body.content) {
        return res.status(400).json({status: 'Failed', message: 'Please provide all required fields'});
    }
    
    const slug = slugify(title, {
        lower: true,
        strict: true,
    });

    const newPost = await postModel.create({
        ...req.body,
        slug,
        userId: req.user.id,
    });

    res.status(201).json({ status: 'Success', message: 'Post Created Successfully', post: newPost });
}

export default createpost;