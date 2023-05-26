import { Request, Response } from "express";

import { GetUserByNameUseCase } from "../../application/usecases/get-user-by-name-use-case";
export class GetUserByNameController {
  constructor(readonly getUserByNameUseCase: GetUserByNameUseCase) {}

  async run(request: Request, response: Response) {
    try {
      const userName = request.params.name;
      const user = await this.getUserByNameUseCase.run(userName);

      if (user) {
        response.status(200).json(user);
      } else {
        response.status(404).json({ message: `Usuario no encontrado` });
      }
    } catch (error) {
      response.status(500).json({ error: "Error al obtener el usuario" });
    }
  }
}
