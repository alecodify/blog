import express from "express";
import verifyUser from '../../middleware/verifyUser.js';
import createpost from './controllers/createpost.js';
import getposts from './controllers/getposts.js';
import updatepost from './controllers/updatepost.js';
import deletepost from './controllers/deletepost.js';

const postRouter = express.Router();

postRouter.post('/create', verifyUser, createpost);
postRouter.get('/getposts', getposts);
postRouter.put('/updatepost/:postId/:userId', verifyUser, updatepost);
postRouter.delete('/deletepost/:postId/:userId', verifyUser, deletepost);

export default postRouter;