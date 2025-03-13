// import { models } from "mongoose";

class CustomError extends Error {
  Sucess: boolean;
  isOperational: boolean;
  status: string;
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.Sucess = false;
    this.statusCode = statusCode;
    this.status =
      this.statusCode >= 400 && this.statusCode < 500 ? "fail" : "error";

    this.isOperational = false;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;
