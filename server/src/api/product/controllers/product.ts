/**
 * product controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async findProductsByCategoryAndBrand(ctx) {
      await this.validateQuery(ctx);

      const { categorySlug, brandSlug } = ctx.params;

      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      try {
        const { results, pagination } = await strapi
          .service("api::product.product")
          .findProductsByCategoryAndBrand(
            categorySlug,
            brandSlug,
            sanitizedQueryParams
          );

        return this.transformResponse(results, { pagination });
      } catch (e) {
        return ctx.badRequest(e.message);
      }
    },
  })
);
