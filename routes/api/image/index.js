const routes = require('express').Router({ mergeParams: true });
const record = require('../../../controllers/image/record');

routes.post('/', record);

module.exports = routes;