require("dotenv").config();
const express = require("express");
const routes = require('./api/routes');
const app = express();

app.use(express.static("views/static"))
app.set('view engine', 'ejs')

app.get("/", routes.get.render)
app.get("/api/get/all", routes.get.send)
app.get("/api/get/:id", routes.get.send)


app.listen(8000, () => console.log("Listening on port 8000"))