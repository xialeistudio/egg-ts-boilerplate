export class AppError extends Error {
  public code: number;
  public status: number;

  constructor(message: string, code: number, status = 500) {
    super(message);
    this.code = code;
    this.status = status;
  }
}
