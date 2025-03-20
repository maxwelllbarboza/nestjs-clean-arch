import { UserRepository } from '@/users/domain/repositories/user.repository';
import { UserOutputDto } from '../dtos/getUser-output.dto';
import { UserInputDto } from '../dtos/getUser-input.dto';

export namespace GetUserUseCase {
  export type Input = UserInputDto;
  export type Output = UserOutputDto;

  export class UseCase {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const entity = await this.userRepository.findById(input.id);
      return entity.toJSON();
    }
  }
}
