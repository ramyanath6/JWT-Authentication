import express from 'express';

const userRouter=express.Router();
import { loginFunc,signupFunc } from '../controller/userController.js';

userRouter.get('/login',loginFunc);
userRouter.get('/register',signupFunc);

export default userRouter;