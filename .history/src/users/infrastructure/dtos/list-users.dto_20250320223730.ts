import { ListUserUseCase } from "@/users/application/usecases/list-users.usecase";


export class ListUsersDto implements ListUserUseCase  {
  name: string;
  email: string;
  password: string;
}
