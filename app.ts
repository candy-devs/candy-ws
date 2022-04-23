import express from "express";

const app = express();
const root = require("path").join(__dirname, "build");

app.use(express.static(root));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.listen(4004, "0.0.0.0", () => {
  console.log(`server start`);
});
