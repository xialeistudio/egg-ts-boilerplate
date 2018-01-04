"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(message, code, status = 500) {
        super(message);
        this.code = code;
        this.status = status;
    }
}
exports.AppError = AppError;
