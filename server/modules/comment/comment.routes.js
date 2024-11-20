import express from "express";
import verifyUser from "../../middleware/verifyUser.js";
import createcomment from './controllers/createcomment.js';
import getpostcomments from './controllers/getpostcomments.js';
import likecomment from './controllers/likecomment.js';
import editcomment from './controllers/editcomment.js';
import getcomments from './controllers/getcomments.js';
import deletecomment from './controllers/deletecomment.js';

const commentRouter = express.Router();

commentRouter.post('/create', verifyUser, createcomment);
commentRouter.get('/getpostcomments/:postId', getpostcomments);
commentRouter.put('/likecomment/:commentId', verifyUser, likecomment);
commentRouter.put('/editcomment/:commentId', verifyUser, editcomment);
commentRouter.get('/getcomments', verifyUser, getcomments);
commentRouter.delete('/deletecomment/:commentId', verifyUser, deletecomment);

export default commentRouter;