import { UserRepository } from '@/users/domain/repositories/user.repository';
import { GetUserOutputDto } from '../dtos/getUser-output.dto';
import { UseCase as DefaultUsecase } from '@/shared/application/usecases/use-case';
import { SearchInputDto } from '@/shared/application/dtos/search-input.dto';

export namespace ListUserUseCase {
  export type Input = SearchInputDto;
  export type Output = void;

  export class UseCase implements DefaultUsecase<Input, Output> {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const params = new UserRepository.SearchParams(input);
      const entity = await this.userRepository.search(input.id);
      return entity.toJSON();
    }
  }
}
