const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running at port ", PORT);
});

app.get("/", (req, res) => {
  res.send("hello I am yaswanth");
});
