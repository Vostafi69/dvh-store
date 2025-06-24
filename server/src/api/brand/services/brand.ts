/**
 * brand service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::brand.brand",
  ({ strapi }) => ({
    async findBrandsByCategory(
      slug: string,
      queryParams: Record<string, unknown>
    ) {
      if (!slug) {
        throw new Error("Slug категории не передан");
      }

      return await strapi.service("api::brand.brand").find({
        filters: {
          equipments: { products: { category: { slug } } },
        },
        populate: {
          image: true,
        },
        ...queryParams,
      });
    },
  })
);
