import { UserRepository } from "../../domain/repositories/user-repository";

export class GetUserByIdUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(id:number) {
   return await this.userRepository.getUserById(id);
  }
}
