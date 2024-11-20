import express from "express";
import getuser from './controllers/getuser.js';
import getusers from './controllers/getusers.js';
import updateuser from './controllers/updateuser.js';
import deleteuser from './controllers/deleteuser.js';
import verifyUser from "../../middleware/verifyUser.js";

const userRouter = express.Router();

userRouter.get('/getusers', verifyUser, getusers);
userRouter.get('/:userId', getuser);
userRouter.put('/update/:userId', verifyUser, updateuser);
userRouter.delete('/delete/:userId', verifyUser, deleteuser);


export default userRouter;