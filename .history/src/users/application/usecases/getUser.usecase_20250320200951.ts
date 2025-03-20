import { UserRepository } from '@/users/domain/repositories/user.repository';
import { GetUserInputDto } from '../dtos/getUser-input.dto';
import { GetUserOutputDto } from '../dtos/getUser-output.dto';

export namespace GetUserUseCase {
  export type Input = GetUserInputDto;
  export type Output = GetUserOutputDto;

  export class UseCase {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const entity = await this.userRepository.findById(input.id);
      return entity.toJSON();
    }
  }
}
