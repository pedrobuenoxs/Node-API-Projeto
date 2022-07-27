const express = require("express");
const swaggerUi = require("swagger-ui-express");
const app = express();
const userRouter = require("./src/user/routes/user.routes");
const swaggerFile = require("./src/swagger/swagger_output.json");

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());

app.use("/api", userRouter);

module.exports = app;
