import { IsNotEmpty, IsString, MaxLength } from "class-validator";


export UserRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string
}
