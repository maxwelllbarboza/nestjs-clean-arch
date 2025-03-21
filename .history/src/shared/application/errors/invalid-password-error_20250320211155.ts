export class InvalidBadRequestError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'BadRequestError';
  }
}
