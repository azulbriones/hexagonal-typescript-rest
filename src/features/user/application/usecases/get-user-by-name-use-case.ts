import { UserRepository } from "../../domain/repositories/user-repository";

export class GetUserByNameUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(name: string) {
    return await this.userRepository.getUserByName(name);
  }
}
