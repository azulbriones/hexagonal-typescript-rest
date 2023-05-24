import { Request, Response } from "express";

import { CreateNewUserUseCase } from "../../application/usecases/create-new-user-use-case";
import { UserModel } from "../../domain/models/user-model";

export class CreateNewUserController {
  constructor(readonly createUserUseCase: CreateNewUserUseCase) {}

  async run(request: Request, response: Response) {
    try {
      const body = request.body as UserModel;

      await this.createUserUseCase.run(body.name, body.email, body.password);

      response.status(201).json({ message: "Usuario creado exitosamente" });
    } catch (error) {
      response
        .status(500)
        .json({ error: "Ocurrió un error al crear el usuario" });
    }
  }
}
