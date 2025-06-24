export default {
  routes: [
    {
      method: "GET",
      path: "/categories/:slug/brands",
      handler: "brand.findBrandsByCategory",
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};
