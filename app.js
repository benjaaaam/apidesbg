// ! NODE MODULES
const express = require("express");
// const morgan = require("morgan");

// ! MODULES PERSO
const userRouter = require("./routes/userRoutes");

const app = express();

// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

app.use(express.json());

app.use((req, res, next) => {
  console.log("MIDDLEWARE MAGGLE");
  next();
});

app.use("/api/v1/users", userRouter);

module.exports = app;
