import { UserRepository } from '@/users/domain/repositories/user.repository';
import { UseCase as DefaultUsecase } from '@/shared/application/usecases/use-case';
import { SearchInputDto } from '@/shared/application/dtos/search-input.dto';
import {
  PaginationoutputDto,
  PaginationOutputMapper,
} from '@/shared/application/dtos/pagination-output.dto';
import { UserOutput } from '../dtos/user-output';

export namespace ListUserUseCase {
  export type Input = SearchInputDto;
  export type Output = PaginationoutputDto<UserOutput>;

  export class UseCase implements DefaultUsecase<Input, Output> {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const params = new UserRepository.SearchParams(input);
      const searchResult = await this.userRepository.search(params);
      return this.toOutput(searchResult);
    }

    private toOutput(searchResult: UserRepository.SearchResult): Output {
      const items = searchResult.items.map(item => {
        
      });
      return PaginationOutputMapper.toOutput(items, searchResult);
    }
  }
}
