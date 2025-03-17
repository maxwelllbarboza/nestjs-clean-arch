export type FieldsErrors = {
  [field: string]: string[];
};

export interface ValidatorFieldsInterface<PropsValidated>{
  errors: FieldsErrors
  validatesData
}
