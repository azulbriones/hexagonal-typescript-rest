import { Request, Response } from "express";

import { GetAllUsersUseCase } from "../../application/usecases/get-all-users-use-case";

export class GetAllUsersController {
  constructor(readonly getAllUsersUseCase: GetAllUsersUseCase) {}

  async run(request: Request, response: Response) {
    try {
      const users = await this.getAllUsersUseCase.run();

      response.status(201).json(users);
    } catch (error) {
      response
        .status(500)
        .json({ error: "Ocurrió un error al retornar los usuarios" });
    }
  }
}
