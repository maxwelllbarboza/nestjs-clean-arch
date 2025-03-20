import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UserRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;
}
