import express from "express";
import signup from "./controllers/signup.js";
import signin from "./controllers/signin.js";
import google from "./controllers/google.js";
import signout from "./controllers/signout.js";

const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.post('/google', google);
authRouter.post('/signout', signout);

export default authRouter;