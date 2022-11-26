import { HttpCode } from './HttpCode';

export class ErrorException extends Error {
  public status: number;
  public metaData: any;
  constructor(code: string = HttpCode.UnknownError, metaData: any = null) {
    super(code);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = code;
    this.status = 500;
    this.metaData = metaData;
    switch (code) {
      case HttpCode.Unauthenticated:
        this.status = 401;
        break;
      case HttpCode.MaximumAllowedGrade:
        this.status = 400;
        break;
      case HttpCode.AsyncError:
        this.status = 400;
        break;
      case HttpCode.NotFound:
        this.status = 404;
        break;
      default:
        this.status = 500;
        break;
    }
  }
}
