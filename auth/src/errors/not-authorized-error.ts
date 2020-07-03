import { CustomError } from '../errors/custom-error';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not Authorize');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype)
  }

  serializeErrors() {
    return [{ message: 'Not authorized' }]
  }
}
