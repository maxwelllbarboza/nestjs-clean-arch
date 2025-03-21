

export class ListSignupDto implements SignupUseCase.Input {
  name: string;
  email: string;
  password: string;
}
