export class BadNotFoundError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}
