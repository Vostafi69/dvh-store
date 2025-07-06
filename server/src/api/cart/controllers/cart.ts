"use strict";

/**
 * cart controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::cart.cart",
  ({ strapi }) => ({
    async createOrUpdate(ctx) {
      try {
        const { userId, productIds } = ctx.request.body;

        if (!userId || !productIds || !Array.isArray(productIds)) {
          return ctx.badRequest(
            "Необходимо указать userId и массив productIds"
          );
        }

        const existingCart = await strapi.db.query("api::cart.cart").findOne({
          where: { user: userId },
          populate: ["products"],
        });

        if (existingCart) {
          const updatedCart = await strapi.db.query("api::cart.cart").update({
            where: { id: existingCart.id },
            data: {
              products: productIds,
            },
            populate: ["products", "user"],
          });

          return this.transformResponse(updatedCart);
        } else {
          // Создаем новую корзину
          const newCart = await strapi.db.query("api::cart.cart").create({
            data: {
              user: userId,
              products: productIds,
            },
            populate: ["products", "user"],
          });

          return this.transformResponse(newCart);
        }
      } catch (err) {
        strapi.log.error("Error in createOrUpdate cart controller", err);
        return ctx.internalServerError(
          "Произошла ошибка при обработке корзины"
        );
      }
    },
  })
);
