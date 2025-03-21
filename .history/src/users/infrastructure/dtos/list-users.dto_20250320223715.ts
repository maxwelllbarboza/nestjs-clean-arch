

export class ListUsersDto implements SignupUseCase.Input {
  name: string;
  email: string;
  password: string;
}
