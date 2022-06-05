const express = require('express');
const app = express();

const routers = require('./Routes/PostsRoutes');

app.use('/',routes);
module.exports=app;