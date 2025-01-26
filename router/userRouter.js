import express from 'express';

const userRouter=express.Router();
import { loginFunc,signupFunc } from '../controller/userController.js';

userRouter.post('/login',loginFunc);
userRouter.post('/register',signupFunc);

export default userRouter;