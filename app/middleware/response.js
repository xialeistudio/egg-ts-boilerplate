"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return async function response(ctx, next) {
        try {
            await next();
        }
        catch (e) {
            ctx.status = e.status || 500;
            ctx.body = {
                errmsg: e.message,
                errcode: e.code || 1,
            };
        }
    };
};
