import { validateSync } from 'class-validator';
import {
  FieldsErrors,
  ValidatorFieldsInterface,
} from './validator-fields.interface';

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated>
{
  errors: FieldsErrors = null;
  validatesData: PropsValidated = null;
  validate(data: any): boolean {
    const errors = validateSync(data);
    if(errors.length){
      this.errors = {}
      for
    }
  }
}
