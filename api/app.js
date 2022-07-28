const express = require("express");
const swaggerUi = require("swagger-ui-express");
const app = express();
const userRouter = require("./src/user/routes/user.routes");
const swaggerFile = require("./src/swagger/swagger_output.json");

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://pedrobuenoxs:12345@dev-challenge.wwuxf6z.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log("Error while connecting database::", err);
  });

app.use("/api", userRouter);

module.exports = app;
