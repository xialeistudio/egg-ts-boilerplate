import { Context } from 'egg';

export default () => {
  return async function response(ctx: Context, next: () => void) {
    try {
      await next();
    } catch (e) {
      ctx.status = e.status || 500;
      ctx.body = {
        errmsg: e.message,
        errcode: e.code || 1,
      };
    }
  };
};
