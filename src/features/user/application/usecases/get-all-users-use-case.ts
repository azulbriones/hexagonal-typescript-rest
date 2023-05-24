import { UserRepository } from "../../domain/repositories/user-repository";

export class GetAllUsersUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run() {
   return await this.userRepository.getAllUsers();
  }
}
