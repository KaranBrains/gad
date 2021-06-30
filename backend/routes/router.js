const router = require("express").Router();
const routes = [
  "auth",
  "verify",
  "admin",
  "contact",
  "slot",
  "instructor",
  "payment",
  "ride",
  "address",
  "home",
];

module.exports = {
  init: function () {
    routes.forEach((route) => {
      const defination = require(`./${route}`);
      router.use(defination.basePath, defination.router);
    });
    return router;
  },
};
