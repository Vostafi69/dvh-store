export default (config, { strapi }) => {
  return async (ctx, next) => {
    if (!ctx.request.header.authorization) {
      const token = ctx.cookies.get("jwt");
      if (token) {
        ctx.request.header.authorization = `Bearer ${token}`;
      }
    }
    await next();
  };
};
