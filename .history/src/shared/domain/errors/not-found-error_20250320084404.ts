
export class NotFoundError extends Error {
  constructor(public message: String) {
    super('Entity Validation Error');
    this.name = 'EntityValidationError';
  }
}
