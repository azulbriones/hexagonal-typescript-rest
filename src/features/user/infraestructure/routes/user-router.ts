import express from "express";

import { createNewUserController, getAllUsersController, getUserByIdController } from "../dependencies";

const userRouter = express.Router();

userRouter.get("/", getAllUsersController.run.bind(getAllUsersController));
userRouter.get("/:id", getUserByIdController.run.bind(getUserByIdController));
userRouter.post("/", createNewUserController.run.bind(createNewUserController));

export { userRouter };
