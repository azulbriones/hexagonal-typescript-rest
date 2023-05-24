import { Request, Response } from "express";
import { GetUserByIdUseCase } from '../../application/usecases/get-user-by-id-use-case';
export class GetUserByIdController {
  constructor(readonly getUserByIdUseCase: GetUserByIdUseCase) {}

  async run(request: Request, response: Response) {
    try {
      const userId = parseInt(request.params.id); 
      const user = await this.getUserByIdUseCase.run(userId);

      if (user) {
        response.status(200).json(user);
      } else {
        response.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      response.status(500).json({ error: 'Error al obtener el usuario' });
    }
  }
}
