const express = require("express");
const app = express();
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
const routes = require("./routes/routes");

swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./utils/swagger.json');

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', routes)
app.use(errorHandler)

module.exports = app;