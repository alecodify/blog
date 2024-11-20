import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 3000 

import errorHandler from './handler/errorHandler.js';
import authRoutes from './modules/auth/auth.routes.js';
import postRoutes from './modules/post/post.routes.js';
import userRoutes from './modules/user/user.routes.js';
import commentRoutes from './modules/comment/comment.routes.js';

const app = express()
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173' }));

mongoose.connect(process.env.MONGODB, {}).then(() => console.log("Connected to MangoDB database successfully")).catch((error) => console.log(`Error while to Database.${error}`))

app.use((req, res, next) => {
    console.log(`Incomming ${req.method} Request on Url : ${req.url}`);
    next();
})

import './models/user.model.js';
import './models/post.model.js';
import './models/comment.model.js';

app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/comment', commentRoutes);

app.get('/', (req, res) => res.send('Hello World! this is backend of Blog website❤️'))
app.listen(port, () => console.log(`Server is listening on port http://localhost:${port}`))