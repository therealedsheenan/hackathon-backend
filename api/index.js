const express = require('express');

const suggestRoute = require('./suggest');
const costRoute = require('./cost');
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
    },
  {
        path: "/cost",
        route: costRoute
    }
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
