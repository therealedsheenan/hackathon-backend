const express = require('express');

const suggestRoute = require('./suggest');
const docsRoute = require('./docs');

const router = express.Router();

const routes = [
    {
        path: '/docs',
        route: docsRoute,
      },
    {
        path: "/suggest",
        route: suggestRoute
    }
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
