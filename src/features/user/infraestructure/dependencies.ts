import { CreateNewUserUseCase } from "../application/usecases/create-new-user-use-case";
import { CreateNewUserController } from "./controllers/create-new-user-controller";
import { PostgreSqlUserRepository } from "./postgresql/postgre-sql-user-repository";
import { GetAllUsersUseCase } from '../application/usecases/get-all-users-use-case';
import { GetAllUsersController } from './controllers/get-all-users-controller';

export const postgresSqlUserRepository = new PostgreSqlUserRepository();
export const createNewUserUseCase = new CreateNewUserUseCase(
  postgresSqlUserRepository
);
export const createNewUserController = new CreateNewUserController(
  createNewUserUseCase
);
export const getAllUsersUseCase = new GetAllUsersUseCase(postgresSqlUserRepository);
export const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);
