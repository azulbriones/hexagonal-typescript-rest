import { UserRepository } from "../../domain/repositories/user-repository";

export class CreateNewUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(name: string, email: string, password: string) {
    return await this.userRepository.createUser(name, email, password);
  }
}
