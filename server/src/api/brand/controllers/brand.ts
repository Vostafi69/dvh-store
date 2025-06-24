/**
 * brand controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::brand.brand",
  ({ strapi }) => ({
    async findBrandsByCategory(ctx) {
      await this.validateQuery(ctx);

      const { slug } = ctx.params;

      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      try {
        const { results, pagination } = await strapi
          .service("api::brand.brand")
          .findBrandsByCategory(slug, sanitizedQueryParams);

        return this.transformResponse(results, { pagination });
      } catch (e) {
        return ctx.badRequest(e.message);
      }
    },
  })
);
