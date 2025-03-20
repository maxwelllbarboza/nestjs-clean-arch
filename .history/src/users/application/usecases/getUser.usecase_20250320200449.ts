import { UserRepository } from '@/users/domain/repositories/user.repository';

export namespace GetUserUseCase {
  export type Input = {
    id: string;
  };

  export type Output = UserOutputDto

  export class UseCase {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const entity = await this.userRepository.findById(input.id);
      return entity.toJSON();
    }
  }
}
