const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
 app.use(express.json());
 app.use(cookieParser());

  const user = require('./routes/userRoute.js');
  const post = require("./routes/postRoute.js");
  app.use("/api",user);
  app.use("/api",post);

module.exports = app;