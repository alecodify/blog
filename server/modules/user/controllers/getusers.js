import mongoose from "mongoose";

const getusers = async (req, res) => {
    const userModel = mongoose.model('user');

    if (!req.user.isAdmin) {
        return res.status(403).json({ status: 'Failed', message: 'You are not allowed to see all users' });
    }

    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.sort === 'asc' ? 1 : -1;

    const users = await userModel.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const usersWithoutPassword = users.map((user) => {
      const { password, ...rest } = user._doc;
      return rest;
    });

    const totalUsers = await userModel.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthUsers = await userModel.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({ status: 'Success', users: usersWithoutPassword, totalUsers, lastMonthUsers});
}

export default getusers;