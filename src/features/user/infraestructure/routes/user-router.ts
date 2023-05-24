import express from "express";

import { createNewUserController } from "../dependencies";

const userRouter = express.Router();

userRouter.post("/", createNewUserController.run.bind(createNewUserController));

export { userRouter };
