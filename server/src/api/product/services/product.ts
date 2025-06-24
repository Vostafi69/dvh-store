/**
 * product service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::product.product",
  ({ strapi }) => ({
    async findProductsByCategoryAndBrand(
      categorySlug: string,
      brandSlug: string,
      queryParams: Record<string, unknown>
    ) {
      if (!categorySlug || !brandSlug) {
        throw new Error("Slug категории или марки не передан");
      }

      return await strapi.service("api::product.product").find({
        filters: {
          equipments: { brand: { slug: brandSlug } },
          category: { slug: categorySlug },
        },
        populate: {
          images: true,
        },
        ...queryParams,
      });
    },
  })
);
