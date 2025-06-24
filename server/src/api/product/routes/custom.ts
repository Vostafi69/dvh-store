export default {
  routes: [
    {
      method: "GET",
      path: "/categories/:categorySlug/brands/:brandSlug/products",
      handler: "product.findProductsByCategoryAndBrand",
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};
