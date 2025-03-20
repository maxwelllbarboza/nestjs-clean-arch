import { BadRequestError } from "../errors/bad-request-error";

export namespace SignupUseCase {
  export type Input = {
    name: string;
    email: string;
    password: string;
  };

  export type Output = {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
  };

  export class UseCase {
    async execute(input: Input): Promise<Output> {
      const {email, name, password} = input;
      if(!email || !name || !password){
        throw new BadRequestError
      }
    }
  }
}
