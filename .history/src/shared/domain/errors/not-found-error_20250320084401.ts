
export class NotFoundError extends Error {
  constructor(public message: StrFieldsErrors) {
    super('Entity Validation Error');
    this.name = 'EntityValidationError';
  }
}
