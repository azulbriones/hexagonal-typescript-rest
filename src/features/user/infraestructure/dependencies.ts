import { CreateNewUserUseCase } from "../application/usecases/create-new-user-use-case";
import { GetAllUsersUseCase } from "../application/usecases/get-all-users-use-case";
import { GetUserByIdUseCase } from "../application/usecases/get-user-by-id-use-case";
import { GetUserByNameUseCase } from "../application/usecases/get-user-by-name-use-case";
import { CreateNewUserController } from "./controllers/create-new-user-controller";
import { GetAllUsersController } from "./controllers/get-all-users-controller";
import { GetUserByIdController } from "./controllers/get-user-by-id-controller";
import { GetUserByNameController } from "./controllers/get-user-by-name-controller";
import { PostgreSqlUserRepository } from "./repository/postgre-sql-user-repository";

export const postgresSqlUserRepository = new PostgreSqlUserRepository();

export const createNewUserUseCase = new CreateNewUserUseCase(
  postgresSqlUserRepository
);
export const createNewUserController = new CreateNewUserController(
  createNewUserUseCase
);

export const getAllUsersUseCase = new GetAllUsersUseCase(
  postgresSqlUserRepository
);
export const getAllUsersController = new GetAllUsersController(
  getAllUsersUseCase
);

export const getUserByIdUseCase = new GetUserByIdUseCase(
  postgresSqlUserRepository
);
export const getUserByIdController = new GetUserByIdController(
  getUserByIdUseCase
);

export const getUserByNameUseCase = new GetUserByNameUseCase(
  postgresSqlUserRepository
);
export const getUserByNameController = new GetUserByNameController(
  getUserByNameUseCase
);
