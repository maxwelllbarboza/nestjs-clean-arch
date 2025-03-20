
export class NotFoundError extends Error {
  constructor(public message: FieldsErrors) {
    super('Entity Validation Error');
    this.name = 'EntityValidationError';
  }
}
