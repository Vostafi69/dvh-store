export default {
  routes: [
    {
      method: "POST",
      path: "/cart/me",
      handler: "cart.createOrUpdate",
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};
