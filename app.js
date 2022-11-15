const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
let indexRouter = require("./routes/index");
const bodyParser = require("body-parser");
let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "frontend/build")));
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/", indexRouter);

app.listen(process.env.PORT || 5001, () => {
  console.log("server is running on port 5001");
});

module.exports = app;
