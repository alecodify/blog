import mongoose from "mongoose";

const getcomments = async(req, res) => {
    const commentModel = mongoose.model('comment');

    if(!req.user.isAdmin){
        return res.status(403).json({ status: 'Failed', message: 'You are not allowed to get all comments' });
    }

    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.sort === 'desc' ? -1 : 1;

    const comments = await commentModel.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalComments = await commentModel.countDocuments();

    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthComments = await commentModel.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({status: 'Success', comments, totalComments, lastMonthComments });
}

export default getcomments;