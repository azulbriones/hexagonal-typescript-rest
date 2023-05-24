import express from "express";

import { createNewUserController, getAllUsersController } from "../dependencies";

const userRouter = express.Router();

userRouter.get("/", getAllUsersController.run.bind(getAllUsersController));
userRouter.post("/", createNewUserController.run.bind(createNewUserController));

export { userRouter };
