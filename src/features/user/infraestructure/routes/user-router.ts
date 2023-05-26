import express from "express";

import {
  createNewUserController,
  getAllUsersController,
  getUserByIdController,
  getUserByNameController,
} from "../dependencies";

const userRouter = express.Router();

userRouter.get("/", getAllUsersController.run.bind(getAllUsersController));
userRouter.get("/:id", getUserByIdController.run.bind(getUserByIdController));
userRouter.post("/", createNewUserController.run.bind(createNewUserController));
userRouter.get(
  "/users/:name",
  getUserByNameController.run.bind(getUserByNameController)
);

export { userRouter };
