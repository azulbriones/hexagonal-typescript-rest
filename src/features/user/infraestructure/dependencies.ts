import { CreateNewUserUseCase } from "../application/usecases/create-new-user-use-case";
import { CreateNewUserController } from "./controllers/create-new-user-controller";
import { PostgreSqlUserRepository } from "./postgresql/postgre-sql-user-repository";

export const postgresSqlUserRepository = new PostgreSqlUserRepository();
export const createNewUserUseCase = new CreateNewUserUseCase(
  postgresSqlUserRepository
);
export const createNewUserController = new CreateNewUserController(
  createNewUserUseCase
);
