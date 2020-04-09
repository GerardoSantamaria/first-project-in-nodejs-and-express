const productsRoutes = require('./productsRoutes');
const usersRoutes = require('./usersRoutes');

const route = (app) => {
    app.use('/api/v1/users', usersRoutes);
    app.use('/api/v1/products', productsRoutes);
};

module.exports = route;
