import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './signuo.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
